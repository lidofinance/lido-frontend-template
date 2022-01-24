import React, { FC, FormEventHandler, useEffect, useState } from 'react';
import {
  Block,
  Input,
  Button,
  DataTable,
  DataTableRow,
} from '@lidofinance/lido-ui';
import { useSDK } from '@lido-sdk/react';
import { useLidoMaticWeb3, useMaticTokenWeb3 } from 'hooks';
import { utils } from 'ethers';
import notify from 'utils/notify';
import styled from 'styled-components';
import SubmitOrConnect from 'components/submitOrConnect';
import { Matic } from 'components/tokens';
import StatusModal from 'components/statusModal';
import { formatBalance } from 'utils';
import { SCANNERS } from 'config';

const InputWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spaceMap.md}px;
`;

export const MaxButton = styled(Button)`
  letter-spacing: 0.4px;
`;

const initialStatus = {
  title: '',
  subtitle: '',
  additionalDetails: '',
  link: '',
  type: '',
  show: false,
};

const Stake: FC = () => {
  const { account, chainId } = useSDK();
  const lidoMaticWeb3 = useLidoMaticWeb3();
  const maticTokenWeb3 = useMaticTokenWeb3();
  const [amount, setAmount] = useState('');
  const [symbol, setSymbol] = useState('MATIC');
  const [reward, setReward] = useState('0');
  const [rate, setRate] = useState('0');
  const [stSymbol, setStSymbol] = useState('stMATIC');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(initialStatus);
  const setMaxInputValue = () => {
    if (account) {
      maticTokenWeb3?.balanceOf(account).then((res) => {
        setAmount(utils.formatEther(res));
      });
    }
  };
  const handleChange = (e: any) => {
    const amount = e.target.value;
    if (!amount) {
      setReward('0');
    } else if (lidoMaticWeb3) {
      setAmount(amount);
      lidoMaticWeb3
        .convertMaticToStMatic(utils.parseUnits(amount, 'ether'))
        .then((res) => {
          setReward(formatBalance(res));
        });
    }
  };

  const handleSubmitTokens: FormEventHandler<HTMLFormElement> | undefined =
    async (e: any) => {
      e.preventDefault();
      const amount = e.target[0].value;
      if (amount && amount !== '0' && lidoMaticWeb3 && maticTokenWeb3) {
        setIsLoading(true);
        try {
          const ethAmount = utils.parseUnits(amount, 'ether');
          const stAmount = await lidoMaticWeb3.convertMaticToStMatic(ethAmount);
          setStatus({
            title: `You are now staking ${symbol}`,
            subtitle: `Staking ${amount} ${symbol}. You will receive ${formatBalance(
              stAmount,
            )} ${stSymbol}. `,
            additionalDetails: 'Confirm this transaction in your wallet',
            type: 'loading',
            link: '',
            show: true,
          });
          if (account && lidoMaticWeb3.address) {
            const alreadyApproved = await maticTokenWeb3.allowance(
              account,
              lidoMaticWeb3.address,
            );
            if (alreadyApproved.lt(ethAmount)) {
              const approval = await maticTokenWeb3.approve(
                lidoMaticWeb3.address,
                ethAmount.toHexString(),
              );
              const { status: approvalStatus } = await approval.wait();
              if (!approvalStatus) {
                setStatus({
                  title: `Transaction Failed`,
                  subtitle: `Something went wrong`,
                  additionalDetails: '',
                  type: 'error',
                  link: '',
                  show: true,
                });
              }
            }
          }
          const submit = await lidoMaticWeb3.submit(ethAmount.toHexString());
          const response = await submit.wait();
          const { status, transactionHash } = response;
          console.log(response);
          if (status) {
            setStatus({
              title: `Stake successful`,
              subtitle: `You have staked ${amount} ${symbol}`,
              additionalDetails: '',
              type: 'success',
              link: `${SCANNERS[chainId]}tx/${transactionHash}`,
              show: true,
            });
            e.target.reset();
          } else {
            setStatus({
              title: `Transaction Failed`,
              subtitle: `Something went wrong`,
              additionalDetails: '',
              type: 'error',
              link: transactionHash
                ? `${SCANNERS[chainId]}tx/${transactionHash}`
                : '',
              show: true,
            });
          }
          setIsLoading(false);
        } catch (ex) {
          setStatus({
            title: `Transaction Failed`,
            subtitle: `Something went wrong`,
            additionalDetails: '',
            type: 'error',
            link: '',
            show: true,
          });
          setIsLoading(false);
        }
      } else {
        notify('Please enter the amount', 'error');
      }
    };
  useEffect(() => {
    if (lidoMaticWeb3) {
      const amount = utils.parseUnits('1', 'ether');
      lidoMaticWeb3.convertMaticToStMatic(amount).then((res) => {
        setRate(formatBalance(res));
      });
    }
  }, [lidoMaticWeb3]);
  useEffect(() => {
    if (lidoMaticWeb3) {
      lidoMaticWeb3?.symbol().then((res) => {
        setStSymbol(res);
      });
    }
  }, [lidoMaticWeb3]);
  useEffect(() => {
    if (maticTokenWeb3) {
      maticTokenWeb3?.symbol().then((res) => {
        setSymbol(res);
      });
    }
  }, [maticTokenWeb3]);

  return (
    <Block>
      <form action="" method="post" onSubmit={handleSubmitTokens}>
        <InputWrapper>
          <Input
            fullwidth
            value={amount}
            leftDecorator={<Matic />}
            rightDecorator={
              <MaxButton
                size="xxs"
                variant="translucent"
                onClick={() => {
                  setMaxInputValue();
                }}
              >
                MAX
              </MaxButton>
            }
            label="Amount"
            disabled={isLoading}
            onChange={handleChange}
          />
        </InputWrapper>
        <SubmitOrConnect isLoading={isLoading} label="Stake now" />
      </form>
      <DataTable>
        <DataTableRow title="You will recieve">
          {reward} {stSymbol}
        </DataTableRow>
        <DataTableRow title="Exchange rate">
          1 {symbol} = {rate} {stSymbol}
        </DataTableRow>
        <DataTableRow
          title="Reward fee"
          help="Please note: this fee applies to staking rewards/earnings only,
          and is NOT taken from your staked amount. It is a fee on earnings only."
        >
          10%
        </DataTableRow>
      </DataTable>
      <StatusModal
        title={status.title}
        subtitle={status.subtitle}
        additionalDetails={status.additionalDetails}
        link={status.link}
        type={status.type}
        show={status.show}
        onClose={() => setStatus(initialStatus)}
      />
    </Block>
  );
};

export default Stake;
