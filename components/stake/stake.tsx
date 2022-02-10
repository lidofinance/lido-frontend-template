import React, { FC, useEffect, useState } from 'react';
import {
  Block,
  Input,
  Button,
  DataTable,
  DataTableRow,
} from '@lidofinance/lido-ui';
import { useSDK } from '@lido-sdk/react';
import { useLidoMaticWeb3, useMaticTokenWeb3 } from 'hooks';
import { BigNumber, utils } from 'ethers';
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

type StatusProps = {
  step: string;
  amount?: string;
  reason?: string;
  stAmount?: BigNumber;
  transactionHash?: string;
  retry?: boolean;
};

const initialStatus = {
  title: '',
  subtitle: '',
  additionalDetails: '',
  link: '',
  type: '',
  show: false,
  retry: false,
};

const Stake: FC = () => {
  const { account, chainId } = useSDK();
  const lidoMaticWeb3 = useLidoMaticWeb3();
  const maticTokenWeb3 = useMaticTokenWeb3();
  const [amount, setAmount] = useState('');
  const [approved, setApproved] = useState(BigNumber.from(0));
  const [symbol, setSymbol] = useState('MATIC');
  const [reward, setReward] = useState('0');
  const [rate, setRate] = useState('0');
  const [stSymbol, setStSymbol] = useState('stMATIC');
  const [isLoading, setIsLoading] = useState(false);
  const [canStake, setCanStake] = useState(false);
  const [status, setStatus] = useState(initialStatus);
  const setMaxInputValue = () => {
    if (account) {
      maticTokenWeb3?.balanceOf(account).then((max) => {
        setAmount(utils.formatEther(max));
        if (lidoMaticWeb3 && max.gt(0)) {
          lidoMaticWeb3.convertMaticToStMatic(max).then(([reward]) => {
            setReward(formatBalance(reward));
          });
        } else {
          setReward('0');
        }
      });
    }
  };
  const setStatusData = ({
    amount,
    stAmount,
    step,
    transactionHash,
    retry,
    reason,
  }: StatusProps) => {
    switch (step) {
      case 'approve':
        setStatus({
          title: `You are now unlocking ${symbol}`,
          subtitle: `Unlocking ${amount} ${symbol}.`,
          additionalDetails: 'Confirm this transaction in your wallet',
          type: 'loading',
          link: '',
          show: true,
          retry: false,
        });
        break;
      case 'approve-processing':
        setStatus({
          title: `You are now unlocking ${symbol}`,
          subtitle: `Unlocking ${amount} ${symbol}.`,
          additionalDetails: 'Processing your transaction',
          type: 'loading',
          link: '',
          show: true,
          retry: false,
        });
        break;
      case 'approved-already':
        setStatus({
          title: `${amount} ${symbol} already unlocked`,
          subtitle: '',
          additionalDetails: 'Processing your transaction',
          type: 'success',
          link: '',
          show: true,
          retry: false,
        });
        break;
      case 'approve-success':
        setStatus({
          title: `${amount} ${symbol} unlocked`,
          subtitle: '',
          additionalDetails: '',
          type: 'success',
          link: '',
          show: true,
          retry: false,
        });
        break;
      case 'confirm':
        setStatus({
          title: `You are now staking ${symbol}`,
          subtitle: `Staking ${amount} ${symbol}. You will receive ${formatBalance(
            stAmount,
          )} ${stSymbol}. `,
          additionalDetails: 'Confirm this transaction in your wallet',
          type: 'loading',
          link: '',
          show: true,
          retry: false,
        });
        break;
      case 'processing':
        setStatus({
          title: `You are now staking ${symbol}`,
          subtitle: `Staking ${amount} ${symbol}. You will receive ${formatBalance(
            stAmount,
          )} ${stSymbol}. `,
          additionalDetails: 'Processing your transaction',
          type: 'loading',
          link: '',
          show: true,
          retry: false,
        });
        break;
      case 'failed':
        setStatus({
          title: `Transaction Failed`,
          subtitle: reason || 'Something went wrong',
          additionalDetails: '',
          type: 'error',
          link: transactionHash
            ? `${SCANNERS[chainId]}tx/${transactionHash}`
            : '',
          show: true,
          retry: retry || false,
        });
        break;
      default:
        setStatus({
          title: `Stake successful`,
          subtitle: `You have staked ${amount} ${symbol}`,
          additionalDetails: '',
          type: 'success',
          link: `${SCANNERS[chainId]}tx/${transactionHash}`,
          show: true,
          retry: false,
        });
        break;
    }
  };
  const handleChange = (e: any) => {
    const amount = e.target.value;
    setAmount(amount);
    if (isNaN(amount) || Number(amount) <= 0) {
      setReward('0');
      setCanStake(false);
    } else if (lidoMaticWeb3 && Number(amount) > 0) {
      lidoMaticWeb3
        .convertMaticToStMatic(utils.parseUnits(amount, 'ether'))
        .then(([res]) => {
          setReward(formatBalance(res));
        });
      setReward('0');
    }
  };

  const handleUnlockTokens = async () => {
    if (amount && amount !== '0' && lidoMaticWeb3 && maticTokenWeb3) {
      setIsLoading(true);
      const parsedAmount = utils.parseUnits(amount, 'ether');
      if (account && lidoMaticWeb3.address) {
        try {
          const alreadyApproved = await maticTokenWeb3.allowance(
            account,
            lidoMaticWeb3.address,
          );
          if (alreadyApproved.lt(parsedAmount)) {
            setStatusData({ amount, step: 'approve' });
            const approval = await maticTokenWeb3.approve(
              lidoMaticWeb3.address,
              parsedAmount.toHexString(),
            );
            setStatusData({ amount, step: 'approve-processing' });
            const { status: approvalStatus } = await approval.wait();
            if (!approvalStatus) {
              setStatusData({ step: 'failed' });
            } else {
              setStatusData({ amount, step: 'approve-success' });
            }
          } else {
            setStatusData({ amount, step: 'approved-already' });
          }
        } catch (ex) {
          setStatusData({ step: 'failed' });
        }
      }
    }
    setIsLoading(false);
  };
  const handleSubmitTokens = async () => {
    if (amount && amount !== '0' && lidoMaticWeb3 && maticTokenWeb3) {
      setIsLoading(true);
      try {
        const parsedAmount = utils.parseUnits(amount, 'ether');
        const [stAmount] = await lidoMaticWeb3.convertMaticToStMatic(
          parsedAmount,
        );
        setStatusData({ amount, stAmount, step: 'confirm' });
        const submit = await lidoMaticWeb3.submit(parsedAmount.toHexString());
        setStatusData({ amount, stAmount, step: 'processing' });
        const response = await submit.wait();
        const { status, transactionHash } = response;
        if (status) {
          setStatusData({
            amount,
            stAmount,
            transactionHash,
            step: 'success',
          });
          setAmount('0');
        } else {
          setStatusData({ transactionHash, step: 'failed', retry: true });
        }
        setIsLoading(false);
      } catch (ex: any) {
        setStatusData({
          step: 'failed',
          reason: ex.message.replace('MetaMask Tx Signature: ', ''),
          retry: true,
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
      lidoMaticWeb3.convertMaticToStMatic(amount).then(([res]) => {
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
  useEffect(() => {
    if (account && maticTokenWeb3 && lidoMaticWeb3) {
      maticTokenWeb3.allowance(account, lidoMaticWeb3.address).then((res) => {
        setApproved(res);
        if (amount) {
          const parsedAmount = utils.parseUnits(amount, 'ether');
          if (amount && res.gte(parsedAmount)) {
            setCanStake(true);
          } else {
            setCanStake(false);
          }
        } else {
          setCanStake(false);
        }
      });
    }
  }, [approved, amount]);
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
        <SubmitOrConnect
          unlock={handleUnlockTokens}
          isLoading={isLoading}
          disabled={!canStake}
          label="Stake now"
          fullwidth={false}
          submit={handleSubmitTokens}
        />
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
        retry={status.retry}
        onRetry={handleSubmitTokens}
      />
    </Block>
  );
};

export default Stake;
