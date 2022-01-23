import React, { FC, FormEventHandler, useState, useEffect } from 'react';
import {
  Block,
  Input,
  Button,
  DataTable,
  DataTableRow,
  Box,
} from '@lidofinance/lido-ui';
import InputWrapper from 'components/inputWrapper';
import { useLidoMaticWeb3, useMaticTokenWeb3 } from 'hooks';
import notify from 'utils/notify';
import { utils } from 'ethers';
import SubmitOrConnect from 'components/submitOrConnect';
import StatusModal from 'components/statusModal';
import { StMatic } from 'components/tokens';
import { SCANNERS } from 'config';
import { useSDK } from '@lido-sdk/react';
import { formatBalance } from 'utils';
import { parseEther } from '@ethersproject/units';

const initialStatus = {
  title: '',
  subtitle: '',
  additionalDetails: '',
  link: '',
  type: '',
  show: false,
};

const Unstake: FC<{ changeTab: (tab: string) => void }> = ({ changeTab }) => {
  const { chainId, account } = useSDK();
  const lidoMaticWeb3 = useLidoMaticWeb3();
  const maticTokenWeb3 = useMaticTokenWeb3();

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(initialStatus);
  const [amount, setAmount] = useState('');
  const [symbol, setSymbol] = useState('MATIC');
  const [rate, setRate] = useState('0');
  const [stSymbol, setStSymbol] = useState('stMATIC');
  const [reward, setReward] = useState('0');

  const setMaxInputValue = () => {
    if (account) {
      lidoMaticWeb3?.balanceOf(account).then((res) => {
        setAmount(utils.formatEther(res));
      });
    }
  };

  useEffect(() => {
    if (lidoMaticWeb3) {
      const amount = utils.parseUnits('1', 'ether');
      lidoMaticWeb3.convertMaticToStMatic(amount).then((res) => {
        setRate(formatBalance(res));
      });
    }
  }, []);
  useEffect(() => {
    if (lidoMaticWeb3) {
      lidoMaticWeb3?.symbol().then((res) => {
        setStSymbol(res);
      });
    }
  }, []);
  useEffect(() => {
    if (maticTokenWeb3) {
      maticTokenWeb3?.symbol().then((res) => {
        setSymbol(res);
      });
    }
  }, []);

  const handleSubmit: FormEventHandler<HTMLFormElement> | undefined = async (
    e: any,
  ) => {
    e.preventDefault();
    const amount = e.target[0].value;
    if (amount && amount !== '0' && lidoMaticWeb3) {
      setIsLoading(true);
      setStatus({
        title: 'You are now launching unstake',
        subtitle: `Unstake ${amount} ${symbol}.`,
        additionalDetails: 'Confirm this transaction in your wallet',
        type: 'loading',
        link: '',
        show: true,
      });
      try {
        const stMaticAmount = utils.parseUnits(amount, 'ether');
        const approval = await lidoMaticWeb3.approve(
          lidoMaticWeb3.address,
          stMaticAmount,
        );
        const { status: approvalStatus } = await approval.wait();
        console.log(approvalStatus);
        const unstake = await lidoMaticWeb3.requestWithdraw(stMaticAmount);
        const { status, transactionHash } = await unstake.wait();
        if (status) {
          e.target.reset();
          setStatus({
            title: `Transaction created`,
            subtitle: `Your ${amount} ${symbol} will be unstaked.`,
            additionalDetails: '',
            type: 'success',
            link: `${SCANNERS[chainId]}tx/${transactionHash}`,
            show: true,
          });
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
          setIsLoading(false);
        }
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

  const handleChange = (e: any) => {
    const amount = e.target.value;
    if (!amount) {
      setReward('0');
    } else if (lidoMaticWeb3) {
      setAmount(amount);
      lidoMaticWeb3
        .convertStMaticToMatic(utils.parseUnits(amount, 'ether'))
        .then((res) => {
          setReward(formatBalance(res));
        });
    }
  };


  return (
    <Block>
      <Box
        bg="#FFFAE0"
        padding="20px"
        borderRadius="10px"
        margin="0 auto 16px auto"
        color="#273852"
      >
        Default stMATIC unstaking period takes at least X days to process. After
        that you can claim your rewards in
        {
          // eslint-disable-next-line
          <span style={{ color: '#00A3FF', cursor: 'pointer' }} onClick={() => changeTab("CLAIM")}>
            {' Claim '}
          </span>
        }
        tab
      </Box>
      <form action="" method="post" onSubmit={handleSubmit}>
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
            value={amount}
            disabled={isLoading}
          />
        </InputWrapper>
        <SubmitOrConnect isLoading={isLoading} label="Start unstaking"/>
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
        onClose={() => setStatus(initialStatus)}
      />
    </Block>
  );
};

export default Unstake;
