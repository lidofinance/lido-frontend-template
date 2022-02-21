import React, { FC, FormEvent, useEffect, useRef, useState } from 'react';
import { Block, Input, DataTable, DataTableRow } from '@lidofinance/lido-ui';
import { useSDK } from '@lido-sdk/react';
import { useLidoMaticRPC, useLidoMaticWeb3, useMaticTokenWeb3 } from 'hooks';
import { BigNumber, utils } from 'ethers';
import notify from 'utils/notify';
import styled from 'styled-components';
import SubmitOrConnect from 'components/submitOrConnect';
import { Matic } from 'components/tokens';
import StatusModal from 'components/statusModal';
import { formatBalance } from 'utils';
import { SCANNERS } from 'config';
import InputRightDecorator from 'components/inputRightDecorator/InputRightDecorator';
import getConfig from 'next/config';

const InputWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spaceMap.md}px;
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
  const { publicRuntimeConfig } = getConfig();
  const { account, chainId } = useSDK();
  const lidoMaticWeb3 = useLidoMaticWeb3();
  const maticTokenWeb3 = useMaticTokenWeb3();
  const lidoMaticRpc = useLidoMaticRPC();
  const [enteredAmount, setEnteredAmount] = useState('');
  const [symbol, setSymbol] = useState('MATIC');
  const [reward, setReward] = useState('0');
  const [rate, setRate] = useState('0');
  const [stSymbol, setStSymbol] = useState('stMATIC');
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [canStake, setCanStake] = useState(false);
  const [canUnlock, setCanUnlock] = useState(false);
  const [status, setStatus] = useState(initialStatus);
  const [totalPooledMatic, setTotalPooledMatic] = useState<number>(0);
  const [currentStakeCapacityPercentage, setCurrentStakeCapacityPercentage] =
    useState<number>(0);
  const hardCapLimit = useRef(+publicRuntimeConfig.hardCapLimit * 2);

  const checkAllowance = (amount: string) => {
    if (lidoMaticWeb3 && maticTokenWeb3 && account && +amount) {
      maticTokenWeb3.allowance(account, lidoMaticWeb3.address).then((res) => {
        const parsedAmount = utils.parseUnits(amount, 'ether');
        if (res.gte(parsedAmount)) {
          setCanUnlock(false);
          setCanStake(true);
        } else {
          setCanUnlock(true);
          setCanStake(false);
        }
      });
    }
  };

  const getCurrentBalance = async () => {
    if (account && maticTokenWeb3) {
      const balance = await maticTokenWeb3.balanceOf(account);
      return utils.formatEther(balance);
    }
    return 0;
  };
  const setMaxInputValue = () => {
    if (account) {
      maticTokenWeb3?.balanceOf(account).then((max) => {
        setEnteredAmount(utils.formatEther(max));
        if (lidoMaticWeb3 && max.gt(0)) {
          lidoMaticWeb3.convertMaticToStMatic(max).then(([reward]) => {
            setReward(formatBalance(reward));
          });
        } else {
          setReward('0');
        }
        checkAllowance(utils.formatEther(max));
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
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = e.target.value;
    if (isNaN(+amount) || /^00/.test(amount) || +amount < 0) {
      return;
    }
    if (+amount === 0) {
      setReward('0');
      setCanStake(false);
      setCanUnlock(false);
    }
    if (+amount) {
      lidoMaticRpc
        .convertMaticToStMatic(utils.parseUnits(amount, 'ether'))
        .then(([res]) => {
          setReward(formatBalance(res));
        });
    }

    checkAllowance(amount);

    setEnteredAmount(amount);
  };
  const handleUnlockTokens = async () => {
    if (
      enteredAmount &&
      enteredAmount !== '0' &&
      lidoMaticWeb3 &&
      maticTokenWeb3
    ) {
      const currentbalance = await getCurrentBalance();
      if (+enteredAmount > +currentbalance) {
        notify('Entered amount exceedes your balance', 'error');
        return;
      }
      if (
        hardCapLimit.current &&
        +enteredAmount + totalPooledMatic > +hardCapLimit.current
      ) {
        notify('Entered amount exceedes hardcap limit', 'error');
        return;
      }
      setIsUnlocking(true);
      const parsedAmount = utils.parseUnits(enteredAmount, 'ether');
      if (account && lidoMaticWeb3.address) {
        try {
          const alreadyApproved = await maticTokenWeb3.allowance(
            account,
            lidoMaticWeb3.address,
          );
          if (alreadyApproved.lt(parsedAmount)) {
            setStatusData({ amount: enteredAmount, step: 'approve' });
            const approval = await maticTokenWeb3.approve(
              lidoMaticWeb3.address,
              parsedAmount.toHexString(),
            );
            setStatusData({
              amount: enteredAmount,
              step: 'approve-processing',
            });
            const { status: approvalStatus } = await approval.wait();
            if (!approvalStatus) {
              setStatusData({ step: 'failed' });
            } else {
              setStatusData({ amount: enteredAmount, step: 'approve-success' });
              setCanUnlock(false);
              setCanStake(true);
            }
          } else {
            setStatusData({ amount: enteredAmount, step: 'approved-already' });
            setCanUnlock(false);
            setCanStake(true);
          }
        } catch (ex) {
          setStatusData({ step: 'failed' });
        }
      }
    } else {
      notify('Please enter the amount', 'error');
    }
    setIsUnlocking(false);
  };
  const handleSubmitTokens = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      enteredAmount &&
      enteredAmount !== '0' &&
      lidoMaticWeb3 &&
      maticTokenWeb3
    ) {
      setIsSubmitting(true);
      try {
        const parsedAmount = utils.parseUnits(enteredAmount, 'ether');
        const [stAmount] = await lidoMaticWeb3.convertMaticToStMatic(
          parsedAmount,
        );
        setStatusData({ amount: enteredAmount, stAmount, step: 'confirm' });
        const submit = await lidoMaticWeb3.submit(parsedAmount.toHexString());
        setStatusData({ amount: enteredAmount, stAmount, step: 'processing' });
        const response = await submit.wait();
        const { status, transactionHash } = response;
        if (status) {
          setStatusData({
            amount: enteredAmount,
            stAmount,
            transactionHash,
            step: 'success',
          });
          setEnteredAmount('');
          setCanUnlock(false);
          setCanStake(false);
        } else {
          setStatusData({ transactionHash, step: 'failed', retry: true });
        }
        setIsSubmitting(false);
      } catch (ex) {
        setStatusData({
          step: 'failed',
          reason: ex.message.replace('MetaMask Tx Signature: ', ''),
          retry: true,
        });
        setIsSubmitting(false);
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

      if (hardCapLimit.current) {
        lidoMaticWeb3.getTotalPooledMatic().then((res) => {
          const value =
            (Number(utils.formatEther(res)) * hardCapLimit.current) / 10000000;
          if (+hardCapLimit.current < +value) {
            setCanUnlock(false);
            setCanStake(false);
          }
          setTotalPooledMatic(value);
          setCurrentStakeCapacityPercentage(
            (value / +hardCapLimit.current) * 100,
          );
        });
      }
    }
  }, [enteredAmount, lidoMaticWeb3, totalPooledMatic]);

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
            value={enteredAmount}
            leftDecorator={<Matic />}
            rightDecorator={
              <InputRightDecorator
                hardCapLimit={hardCapLimit.current || 0}
                currentlyStakedAmount={totalPooledMatic}
                currentStakeCapacityPercentage={currentStakeCapacityPercentage}
                onClick={setMaxInputValue}
                disabled={!account}
              />
            }
            label="Amount"
            disabled={isUnlocking || isSubmitting}
            onChange={handleChange}
          />
        </InputWrapper>
        <SubmitOrConnect
          unlock={handleUnlockTokens}
          isUnlocking={isUnlocking}
          isSubmitting={isSubmitting}
          disabledSubmit={!canStake}
          disabledUnlock={!canUnlock}
          submitLabel="Stake now"
          unlockLabel="Unlock tokens"
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
