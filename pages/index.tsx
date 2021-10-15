import { FC, FormEventHandler, useState, MouseEventHandler } from 'react';
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
} from '@lidofinance/lido-ui';
import Head from 'next/head';
import Switch from 'components/switch';
import Wallet from 'components/wallet';
import Section from 'components/section';
import Layout from 'components/layout';
import Faq from 'components/faq';
import { FAQItem, getFaqList } from 'lib/faqList';
import styled from 'styled-components';
import { useContractSWR, useSTETHContractRPC } from '@lido-sdk/react';
import { useLidoMaticWeb3, useMaticTokenWeb3 } from 'hooks';
import { utils } from 'ethers';

interface HomeProps {
  faqList: FAQItem[];
}

const InputWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spaceMap.md}px;
`;

const Home: FC<HomeProps> = ({ faqList }) => {
  const lidoMaticWeb3 = useLidoMaticWeb3();
  const maticTokenWeb3 = useMaticTokenWeb3();
  const handleSubmitTokens: FormEventHandler<HTMLFormElement> | undefined =
    async (e: any) => {
      e.preventDefault();
      const amount = e.target[0].value;
      if (amount && lidoMaticWeb3 && maticTokenWeb3) {
        try {
          const ethAmount = utils.parseUnits(amount, 'ether').toHexString();
          await maticTokenWeb3.approve(lidoMaticWeb3.address, ethAmount, {
            gasLimit: utils.hexValue(8000000),
            gasPrice: utils.hexValue(10000000000),
          });
          await lidoMaticWeb3.submit(ethAmount, {
            gasLimit: utils.hexValue(8000000),
            gasPrice: utils.hexValue(10000000000),
          });
        } catch (ex) {
          console.log(ex);
        }
      }
    };
  const handleSubmitWithdraw: FormEventHandler<HTMLFormElement> | undefined =
    async (e: any) => {
      e.preventDefault();
      const amount = e.target[0].value;
      if (amount && lidoMaticWeb3) {
        try {
          const ethAmount = utils.parseUnits(amount, 'ether');
          await lidoMaticWeb3.requestWithdraw(ethAmount, {
            gasLimit: utils.hexValue(8000000),
            gasPrice: utils.hexValue(10000000000),
          });
        } catch (ex) {
          console.log(ex);
        }
      }
    };
  const handleClaimTokens: MouseEventHandler<HTMLButtonElement> | undefined =
    async (e: any) => {
      e.preventDefault();
      if (lidoMaticWeb3) {
        try {
          await lidoMaticWeb3.claimTokens({
            gasLimit: utils.hexValue(8000000),
            gasPrice: utils.hexValue(10000000000),
          });
        } catch (ex) {
          console.log(ex);
        }
      }
    };

  const contractRpc = useSTETHContractRPC();
  const tokenName = useContractSWR({
    contract: contractRpc,
    method: 'name',
  });
  const [isToggled, setIsToggled] = useState(false);

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
          <form action="" method="post" onSubmit={handleSubmitWithdraw}>
            <InputWrapper>
              <Input
                fullwidth
                placeholder="0"
                leftDecorator={<Steth />}
                label="Token amount"
              />
            </InputWrapper>
            <Stack justify="space-around">
              <Button type="submit">Withdraw</Button>
              <Button onClick={handleClaimTokens} color="success">
                Claim
              </Button>
            </Stack>
          </form>
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
              />
            </InputWrapper>
            <Button fullwidth type="submit">
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
