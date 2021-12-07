import { FC, FormEventHandler, useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import {
  Block,
  Link,
  DataTable,
  DataTableRow,
  Input,
  Steth,
  Button,
  Stack,
  Select,
  Option,
  Divider,
  Container,
} from '@lidofinance/lido-ui';
import { toast } from 'react-toastify';
import Head from 'next/head';
import Switch from 'components/switch';
import Wallet from 'components/wallet';
import Section from 'components/section';
import Layout from 'components/layout';
import Faq from 'components/faq';
import { FAQItem, getFaqList } from 'lib/faqList';
import styled from 'styled-components';
import { useContractSWR, useSTETHContractRPC, useSDK } from '@lido-sdk/react';
import {
  useLidoMaticWeb3,
  useMaticTokenWeb3,
  useLidoNFTRPC,
  useStakeManagerWeb3,
  useStakeManagerRPC,
} from 'hooks';
import { BigNumber, utils } from 'ethers';

interface HomeProps {
  faqList: FAQItem[];
}

interface TokenOption {
  value: string;
  text: string;
  available: boolean;
}

const InputWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spaceMap.md}px;
`;

const Home: FC<HomeProps> = ({ faqList }) => {
  const { account } = useSDK();
  const lidoNFTRPC = useLidoNFTRPC();
  const lidoMaticWeb3 = useLidoMaticWeb3();
  const stakeManagerWeb3 = useStakeManagerWeb3();
  const stakeManagerRPC = useStakeManagerRPC();
  const maticTokenWeb3 = useMaticTokenWeb3();
  const [tokens, setTokens] = useState<TokenOption[]>([]);
  const [delay, setDelay] = useState(0);
  const [selectedToken, setSelectedToken] = useState('');
  const epoch = useContractSWR({
    contract: stakeManagerRPC,
    method: 'epoch',
    params: [],
  });
  const tokenApproved = useContractSWR({
    contract: lidoNFTRPC,
    method: 'getApprovedTokens',
    params: [account],
  })
    .data?.map((id) => id.toString())
    .filter((id) => id !== '0');
  const tokenOwned = useContractSWR({
    contract: lidoNFTRPC,
    method: 'getOwnedTokens',
    params: [account],
  })
    .data?.map((id) => id.toString())
    .filter((id) => id !== '0');
  useEffect(() => {
    if (stakeManagerWeb3 && !delay) {
      stakeManagerWeb3?.withdrawalDelay().then((delay) => {
        setDelay(delay.toNumber() || 0);
      });
    }
  }, [stakeManagerWeb3]);
  useEffect(() => {
    if (lidoMaticWeb3 && tokenOwned && tokenApproved) {
      if (tokenOwned.length === 0 && tokenApproved.length === 0) {
        if (tokens.length !== 0) {
          setTokens([]);
        }
        return;
      }
      const rawTokens = tokenOwned?.concat(tokenApproved);
      try {
        Promise.all(
          rawTokens?.map((id) => {
            return lidoMaticWeb3.token2WithdrawRequest(id);
          }),
        ).then((result) => {
          console.log(epoch);
          const tokens = result.map((token, index) => {
            const amount = utils.formatEther(
              token?.amount2WithdrawFromStMATIC.toString() || 0,
            );
            let epochs = BigNumber.from(0);
            let available = false;
            if (epoch.data && token.requestTime) {
              epochs = token.requestTime.sub(epoch.data);
              available = epochs.lte(0);
            }
            return {
              value: rawTokens[index],
              text: `${amount} - Available ${
                available ? '' : `in: ${epochs} epochs`
              }`,
              available,
            };
          });
          setTokens(tokens);
        });
      } catch (ex) {
        console.log(ex);
      }
    }
  }, [JSON.stringify(tokenOwned), JSON.stringify(tokenApproved), delay]);

  const handleSubmitTokens: FormEventHandler<HTMLFormElement> | undefined =
    async (e: any) => {
      e.preventDefault();
      const amount = e.target[0].value;
      if (amount && amount !== '0' && lidoMaticWeb3 && maticTokenWeb3) {
        setIsLoadingSubmit(true);
        try {
          const ethAmount = utils.parseUnits(amount, 'ether').toHexString();
          const approval = await maticTokenWeb3.approve(
            lidoMaticWeb3.address,
            ethAmount,
          );
          const { status: approvalStatus } = await approval.wait();
          if (!approvalStatus) {
            notify('Something went wrong', 'error');
          }
          const submit = await lidoMaticWeb3.submit(ethAmount);
          const { status } = await submit.wait();
          if (status) {
            // setSelectedToken('');
            notify('Transaction was successful');
          } else {
            notify('Something went wrong', 'error');
          }
          setIsLoadingSubmit(false);
        } catch (ex) {
          if (ex.message.length > 45) {
            notify('Something went wrong', 'error');
          } else {
            notify(ex.message, 'error');
          }
          setIsLoadingSubmit(false);
        }
      } else {
        notify('Please enter the amount', 'error');
      }
    };
  const handleSubmitWithdraw: FormEventHandler<HTMLFormElement> | undefined =
    async (e: any) => {
      e.preventDefault();
      const amount = e.target[0].value;
      if (amount && amount !== '0' && lidoMaticWeb3) {
        setIsLoadingWithdraw(true);
        try {
          const ethAmount = utils.parseUnits(amount, 'ether');
          await lidoMaticWeb3.approve(lidoMaticWeb3.address, ethAmount);
          const withdraw = await lidoMaticWeb3.requestWithdraw(ethAmount);
          const { status } = await withdraw.wait();
          if (status) {
            e.target.reset();
            notify('Transaction was successful');
          } else {
            notify('Something went wrong', 'error');
          }
          setIsLoadingWithdraw(false);
        } catch (ex) {
          if (ex.message.length > 45) {
            notify('Something went wrong', 'error');
          } else {
            notify(ex.message, 'error');
          }
          setIsLoadingWithdraw(false);
          console.log(ex);
        }
      } else {
        notify('Please enter the amount', 'error');
      }
    };
  const handleClaimTokens: FormEventHandler<HTMLFormElement> | undefined =
    async (e: any) => {
      e.preventDefault();
      if (lidoMaticWeb3 && selectedToken) {
        setIsLoadingClaim(true);
        const tokenId = selectedToken;
        try {
          const claim = await lidoMaticWeb3.claimTokens(tokenId);
          const { status } = await claim.wait();
          if (status) {
            e.target.reset();
            setSelectedToken('');
            notify('Transaction was successful');
          } else {
            notify('Something went wrong', 'error');
          }
          setIsLoadingClaim(false);
        } catch (ex) {
          if (ex.message.length > 45) {
            notify('Something went wrong', 'error');
          } else {
            notify(ex.message, 'error');
          }
          setIsLoadingClaim(false);
          console.log(ex);
        }
      }
    };
  const notify = (message: string, type?: string) => {
    toast.configure();
    switch (type) {
      case 'error':
        toast.error(message, {
          position: toast.POSITION.TOP_LEFT,
        });
        break;
      default:
        toast.success(message, {
          position: toast.POSITION.TOP_LEFT,
        });
        break;
    }
  };

  const contractRpc = useSTETHContractRPC();
  const tokenName = useContractSWR({
    contract: contractRpc,
    method: 'name',
  });
  const [isToggled, setIsToggled] = useState(false);
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  const [isLoadingClaim, setIsLoadingClaim] = useState(false);
  const [isLoadingWithdraw, setIsLoadingWithdraw] = useState(false);
  return (
    <Layout title="PoLido">
      <Head>
        <title>PoLido</title>
      </Head>
      <Switch
        optionOne={'STAKE'}
        optionTwo={'WITHDRAW'}
        isToggled={isToggled}
        onToggle={() => setIsToggled(!isToggled)}
      />
      <Wallet />
      {isToggled ? (
        <Block>
          <Stack
            align="center"
            justify="space-between"
            wrap="nowrap"
            spacing="md"
            direction="column"
          >
            <Container size="tight">
              <form action="" method="post" onSubmit={handleSubmitWithdraw}>
                <Stack
                  align="center"
                  justify="space-between"
                  wrap="nowrap"
                  spacing="md"
                  direction="column"
                >
                  <Input
                    fullwidth={true}
                    placeholder="0"
                    leftDecorator={<Steth />}
                    label="Token amount"
                    disabled={isLoadingClaim || isLoadingWithdraw}
                  />
                  <Divider indents="sm" />
                  <Button
                    fullwidth={true}
                    type="submit"
                    loading={isLoadingWithdraw}
                    disabled={isLoadingClaim || isLoadingWithdraw}
                  >
                    Request Withdraw
                  </Button>
                </Stack>
              </form>
            </Container>
            <Divider indents="lg" />
            <Container size="tight">
              <form action="" method="post" onSubmit={handleClaimTokens}>
                <Stack
                  align="center"
                  justify="space-between"
                  wrap="nowrap"
                  spacing="md"
                  direction="column"
                >
                  <Select
                    fullwidth={true}
                    label="Amount"
                    onChange={function (e) {
                      setSelectedToken(`${e}`);
                    }}
                    value={selectedToken}
                  >
                    {tokens && Array.isArray(tokens)
                      ? tokens.map(({ value, text, available }) => (
                          <Option
                            value={value}
                            key={value}
                            disabled={!available}
                          >
                            {text}
                          </Option>
                        ))
                      : null}
                  </Select>
                  <Divider indents="sm" />
                  <Button
                    fullwidth={true}
                    type="submit"
                    color="success"
                    loading={isLoadingClaim}
                    disabled={isLoadingClaim || isLoadingWithdraw}
                  >
                    Claim
                  </Button>
                </Stack>
              </form>
            </Container>
          </Stack>
        </Block>
      ) : (
        <Block>
          <form action="" method="post" onSubmit={handleSubmitTokens}>
            <InputWrapper>
              <Input
                fullwidth
                placeholder="0"
                leftDecorator={<Steth />}
                label="Token amount"
                disabled={isLoadingSubmit}
              />
            </InputWrapper>
            <Button
              fullwidth
              type="submit"
              disabled={isLoadingSubmit}
              loading={isLoadingSubmit}
            >
              Submit
            </Button>
          </form>
        </Block>
      )}
      <Section title="Data table" headerDecorator={<Link href="#">Link</Link>}>
        <Block>
          <DataTable>
            <DataTableRow title="Token name" loading={tokenName.initialLoading}>
              {tokenName.data}
            </DataTableRow>
          </DataTable>
        </Block>
      </Section>
      <Faq faqList={faqList} />
    </Layout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  // list of .md files from /faq/
  const fileList = ['lido-frontend-template'];
  const faqList = await getFaqList(fileList);

  return { props: { faqList } };
};
