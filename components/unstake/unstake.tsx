import React, { FC, useState, useEffect } from 'react';
import {
  Block,
  Input,
  Button,
  DataTable,
  DataTableRow,
  Box,
} from '@lidofinance/lido-ui';
import InputWrapper from 'components/inputWrapper';
import {
  useLidoMaticRPC,
  useLidoMaticWeb3,
  useMaticTokenWeb3,
  useStakeManagerRPC,
} from 'hooks';
import notify from 'utils/notify';
import { BigNumber, utils } from 'ethers';
import SubmitOrConnect from 'components/submitOrConnect';
import StatusModal from 'components/statusModal';
import { StMatic } from 'components/tokens';
import { SCANNERS } from 'config';
import { useContractSWR, useSDK } from '@lido-sdk/react';
import { formatBalance } from 'utils';

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

const Unstake: FC<{ changeTab: (tab: string) => void }> = ({ changeTab }) => {
  const { chainId, account } = useSDK();
  const lidoMaticWeb3 = useLidoMaticWeb3();
  const maticTokenWeb3 = useMaticTokenWeb3();
  const stakeManagerRPC = useStakeManagerRPC();
  const stMaticTokenRPC = useLidoMaticRPC();

  const [isApproving, setIsApproving] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [canApprove, setCanApprove] = useState(false);
  const [canUnstake, setCanUnstake] = useState(false);
  const [status, setStatus] = useState(initialStatus);
  const [enteredAmount, setEnteredAmount] = useState('');
  const [symbol, setSymbol] = useState('MATIC');
  const [rate, setRate] = useState('0');
  const [stSymbol, setStSymbol] = useState('stMATIC');
  const [reward, setReward] = useState('0');

  const delay = useContractSWR({
    contract: stakeManagerRPC,
    method: 'withdrawalDelay',
  });

  const stMaticBalance = useContractSWR({
    contract: stMaticTokenRPC,
    method: 'balanceOf',
    params: [account],
  });

  const checkAllowance = (amount: string) => {
    if (lidoMaticWeb3 && maticTokenWeb3 && account && +amount) {
      lidoMaticWeb3.allowance(account, lidoMaticWeb3.address).then((res) => {
        const parsedAmount = utils.parseUnits(amount, 'ether');
        if (res.gte(parsedAmount)) {
          setCanApprove(false);
          setCanUnstake(true);
        } else {
          setCanApprove(true);
          setCanUnstake(false);
        }
      });
    }
  };

  const setMaxInputValue = () => {
    if (account) {
      lidoMaticWeb3?.balanceOf(account).then((max) => {
        setEnteredAmount(utils.formatEther(max));
        if (lidoMaticWeb3 && max.gt(0)) {
          lidoMaticWeb3.convertStMaticToMatic(max).then(([res]) => {
            setReward(formatBalance(res));
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
    step,
    transactionHash,
    retry,
    reason,
  }: StatusProps) => {
    switch (step) {
      case 'approve':
        setStatus({
          title: `You are now approving ${stSymbol}`,
          subtitle: `Approving ${amount} ${stSymbol}.`,
          additionalDetails: 'Confirm this transaction in your wallet',
          type: 'loading',
          link: '',
          show: true,
          retry: false,
        });
        break;
      case 'approve-processing':
        setStatus({
          title: `You are now approving ${stSymbol}`,
          subtitle: `Approving ${amount} ${stSymbol}.`,
          additionalDetails: 'Processing your transaction',
          type: 'loading',
          link: '',
          show: true,
          retry: false,
        });
        break;
      case 'approved-already':
        setStatus({
          title: `${amount} ${stSymbol} already approved`,
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
          title: `${amount} ${stSymbol} approved`,
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
          title: `You are now launching unstake`,
          subtitle: `Unstake ${amount} ${symbol}.`,
          additionalDetails: 'Confirm this transaction in your wallet',
          type: 'loading',
          link: '',
          show: true,
          retry: false,
        });
        break;
      case 'processing':
        setStatus({
          title: `You are now unstaking ${symbol}`,
          subtitle: `Unstake ${amount} ${symbol}`,
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
          title: `Transaction created`,
          subtitle: `Your ${amount} ${stSymbol} will be unstaked.`,
          additionalDetails: '',
          type: 'success',
          link: `${SCANNERS[chainId]}tx/${transactionHash}`,
          show: true,
          retry: false,
        });
        break;
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

  const handleApprove = async () => {
    if (enteredAmount && enteredAmount !== '0' && lidoMaticWeb3) {
      if (!stMaticBalance.data) return;
      const currentlyStaked = +utils.formatEther(stMaticBalance.data);
      if (+enteredAmount > currentlyStaked) {
        notify('Entered amount bigger than staked amount', 'error');
        return;
      }
      setIsApproving(true);
      const stMaticAmount = utils.parseUnits(enteredAmount, 'ether');

      if (account && lidoMaticWeb3.address) {
        try {
          const alreadyApproved = await lidoMaticWeb3.allowance(
            account,
            lidoMaticWeb3.address,
          );
          if (alreadyApproved.lt(stMaticAmount)) {
            setStatusData({
              amount: enteredAmount,
              step: 'approve',
            });
            const approval = await lidoMaticWeb3.approve(
              lidoMaticWeb3.address,
              stMaticAmount,
            );
            setStatusData({
              amount: enteredAmount,
              step: 'approve-processing',
            });
            const { status: approvalStatus, transactionHash } =
              await approval.wait();
            if (approvalStatus) {
              setStatusData({
                amount: enteredAmount,
                step: 'approve-success',
              });
              setCanApprove(false);
              setCanUnstake(true);
            } else {
              setStatusData({ transactionHash, step: 'failed', retry: true });
            }
            setIsApproving(false);
          } else {
            setStatusData({ amount: enteredAmount, step: 'approved-already' });
            setCanApprove(false);
            setCanUnstake(true);
          }
        } catch (ex) {
          setStatusData({
            step: 'failed',
            retry: true,
          });
        }
      }
    } else {
      notify('Please enter the amount', 'error');
    }
    setIsApproving(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (enteredAmount && enteredAmount !== '0' && lidoMaticWeb3) {
      if (!stMaticBalance.data) return;
      const currentlyStaked = +utils.formatEther(stMaticBalance.data);
      if (+enteredAmount > currentlyStaked) {
        notify('Entered amount bigger than staked amount', 'error');
        return;
      }
      setIsSubmitting(true);
      try {
        const stMaticAmount = utils.parseUnits(enteredAmount, 'ether');
        setStatusData({ amount: enteredAmount, step: 'confirm' });
        const unstake = await lidoMaticWeb3.requestWithdraw(stMaticAmount);
        setStatusData({ amount: enteredAmount, step: 'processing' });
        const { status, transactionHash } = await unstake.wait();
        if (status) {
          setEnteredAmount('');
          setStatusData({
            amount: enteredAmount,
            transactionHash,
            step: 'success',
          });
          setCanUnstake(false);
          setCanApprove(false);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = e.target.value;
    if (isNaN(+amount) || /^00/.test(amount) || +amount < 0) {
      return;
    }
    if (+amount === 0) {
      setReward('0');
      setCanApprove(false);
      setCanUnstake(false);
    } else if (lidoMaticWeb3 && +amount > 0) {
      lidoMaticWeb3
        .convertStMaticToMatic(utils.parseUnits(amount, 'ether'))
        .then(([res]) => {
          setReward(formatBalance(res));
        });
      checkAllowance(amount);
    }

    setEnteredAmount(amount);
  };

  return (
    <Block>
      <Box
        // @ts-expect-error attributes are not in the interface
        bg="#FFFAE0"
        padding="20px"
        borderRadius="10px"
        margin="0 auto 16px auto"
        color="#273852"
      >
        Default stMATIC unstaking period takes around 9 days (
        {delay.data?.toString() || 80} epochs) to process. After that you can
        claim your rewards in
        {
          // eslint-disable-next-line
          <span
            style={{ color: '#00A3FF', cursor: 'pointer' }}
            onClick={() => changeTab('CLAIM')}
          >
            {' Claim '}
          </span>
        }
        tab
      </Box>
      <form action="" method="post">
        <InputWrapper>
          <Input
            fullwidth={true}
            placeholder="0"
            leftDecorator={<StMatic />}
            onChange={handleChange}
            rightDecorator={
              <Button
                size="xxs"
                variant="translucent"
                onClick={() => {
                  setMaxInputValue();
                }}
              >
                MAX
              </Button>
            }
            label="Amount"
            value={enteredAmount}
            disabled={isSubmitting || isApproving}
          />
        </InputWrapper>
        <SubmitOrConnect
          isUnlocking={isApproving}
          isSubmitting={isSubmitting}
          unlock={handleApprove}
          unlockLabel="Unlock tokens"
          submitLabel="Unstake"
          submit={handleSubmit}
          fullwidth={false}
          disabledSubmit={!canUnstake}
          disabledUnlock={!canApprove}
        />
      </form>
      <DataTable>
        <DataTableRow title="You will recieve">
          {reward} {symbol}
        </DataTableRow>
        <DataTableRow title="Exchange rate">
          1 {stSymbol} = {rate} {symbol}
        </DataTableRow>
      </DataTable>
      <StatusModal
        title={status.title}
        subtitle={status.subtitle}
        additionalDetails={status.additionalDetails}
        link={status.link}
        type={status.type}
        show={status.show}
        retry={status.retry}
        onClose={() => setStatus(initialStatus)}
        onRetry={handleSubmit}
      />
    </Block>
  );
};

export default Unstake;
