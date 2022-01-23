import React, { FC, FormEventHandler, useState, useEffect } from 'react';
import { Block, Box, Modal, Text, Loader } from '@lidofinance/lido-ui';
import { useContractSWR, useSTETHContractRPC, useSDK } from '@lido-sdk/react';
import notify from 'utils/notify';
import { BigNumber, utils } from 'ethers';
import SubmitOrConnect from 'components/submitOrConnect';
import FormatToken from 'components/formatToken/formatToken';
import {
  ClaimCard,
  ClaimStat,
  ClaimStatBalance,
  ClaimCardEdit,
} from '../claimCard/claimCard';

import {
  useLidoMaticWeb3,
  useLidoNFTRPC,
  useStakeManagerWeb3,
  useStakeManagerRPC,
  useMaticTokenWeb3,
} from 'hooks';
import SelectTokenModal from 'components/selectTokenModal';
import { formatBalance } from 'utils';
import StatusModal from 'components/statusModal';

interface TokenOption {
  value: string;
  amount: BigNumber;
  text: string;
  available: boolean;
  checked: boolean;
}

const initialStatus = {
  title: '',
  subtitle: '',
  additionalDetails: '',
  link: '',
  type: '',
  show: false,
};

const Claim: FC<{ changeTab: (tab: string) => void }> = ({ changeTab }) => {
  const { account } = useSDK();
  const lidoNFTRPC = useLidoNFTRPC();
  const lidoMaticWeb3 = useLidoMaticWeb3();
  const maticTokenWeb3 = useMaticTokenWeb3();
  const stakeManagerWeb3 = useStakeManagerWeb3();
  const stakeManagerRPC = useStakeManagerRPC();
  const [delay, setDelay] = useState(0);

  const [status, setStatus] = useState(initialStatus);
  const [isLoading, setIsLoading] = useState(false);
  const [showSelectModal, setShowSelectModal] = useState(false);
  const [tokens, setTokens] = useState<TokenOption[]>([]);
  const [claimableAmount, setClaimableAmount] = useState(BigNumber.from(0));
  const [pendingAmount, setPendingAmount] = useState(BigNumber.from(0));
  const [symbol, setSymbol] = useState('MATIC');
  const [claimAmount, setClaimAmount] = useState('0');

  const fetchTokens = async () => {
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
          let claimableAmount = BigNumber.from(0);
          let pendingAmount = BigNumber.from(0);
          const tokens = result.map((token, index) => {
            const amount = token?.amount2WithdrawFromStMATIC || 0;
            let epochs = BigNumber.from(0);
            let available = false;
            if (epoch.data && token.requestTime) {
              epochs = token.requestTime.sub(epoch.data);
              available = epochs.lte(0);
            }
            if (available) {
              claimableAmount = claimableAmount.add(amount);
            } else {
              pendingAmount = pendingAmount.add(amount);
            }
            console.log(rawTokens[index]);
            return {
              value: rawTokens[index],
              amount,
              text: `${amount} - Available ${
                available ? '' : `in: ${epochs} epochs`
              }`,
              available,
              checked: available,
            };
          });
          const claimAmount = formatBalance(claimableAmount);
          setTokens(tokens);
          setClaimableAmount(claimableAmount);
          setClaimAmount(claimAmount);
          setPendingAmount(pendingAmount);
        });
      } catch (ex) {
        console.log(ex);
      }
    }
  };

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
    if (maticTokenWeb3) {
      maticTokenWeb3.symbol().then((res) => {
        setSymbol(res);
      });
    }
  }, [maticTokenWeb3]);

  useEffect(() => {
    if (stakeManagerWeb3 && !delay) {
      stakeManagerWeb3?.withdrawalDelay().then((delay) => {
        setDelay(delay.toNumber() || 0);
      });
    }
  }, [stakeManagerWeb3]);

  useEffect(() => {
    fetchTokens();
  }, [JSON.stringify(tokenOwned), JSON.stringify(tokenApproved), delay]);

  useEffect(() => {
    const claimAmount = formatBalance(
      tokens.reduce((acc, token) => {
        console.log(token.checked);
        if (token.checked) {
          acc = acc.add(token.amount);
        }
        return acc;
      }, BigNumber.from(0)),
    );
    setClaimAmount(claimAmount);
  }, [JSON.stringify(tokens)]);

  const handleSubmit: FormEventHandler<HTMLFormElement> | undefined = async (
    e: any,
  ) => {
    e.preventDefault();
    if (lidoMaticWeb3 && tokens.length) {
      setIsLoading(true);
      setStatus({
        title: 'You are now claiming your reward',
        subtitle: `Claiming ${claimAmount} ${symbol}`,
        additionalDetails: 'Confirm this transaction in your wallet',
        type: 'loading',
        link: '',
        show: true,
      });
      const tokenIds = tokens.reduce((acc, token) => {
        if (token.checked) {
          acc.push(token.value);
        }
        return acc;
      }, [] as string[]);
      try {
        const claims = await Promise.all(
          tokenIds.map((tokenId) => lidoMaticWeb3.claimTokens(tokenId)),
        );
        const results = await Promise.all(claims.map((claim) => claim.wait()));
        const finalRes = results.reduce(
          (acc, { status }) => {
            if (status) {
              acc.success += 1;
            } else {
              acc.failed += 1;
            }
            return acc;
          },
          {
            success: 0,
            failed: 0,
          },
        );
        await fetchTokens();
        setIsLoading(false);
        if (finalRes.failed > 0) {
          setStatus({
            title: 'Failed to claim rewards',
            subtitle: `Something went wrong`,
            additionalDetails: '',
            type: 'error',
            link: '',
            show: true,
          });
        } else {
          setStatus({
            title: 'Reward claimed',
            subtitle: `You have claimed ${claimAmount} ${symbol}`,
            additionalDetails: '',
            type: 'success',
            link: '',
            show: true,
          });
        }
        setIsLoading(false);
      } catch (ex) {
        if (ex.message.length > 45) {
          notify('Something went wrong', 'error');
        } else {
          notify(ex.message, 'error');
        }
        // setIsLoading(false);
        console.log(ex);
      }
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
        You will be able to claim your rewards after the withdraw request has been processed. To unstake your amount go to Unstake tab
        {
          // eslint-disable-next-line
          <span style={{ color: '#00A3FF', cursor: 'pointer' }} onClick={() => changeTab("UNSTAKE")}>
            {' Unstake '}
          </span>
        }tab
      </Box>
      <ClaimCard>
        <ClaimStat>
          <ClaimStatBalance
            title="Total claimable rewards"
            loading={false}
            bold={true}
            value={<FormatToken amount={claimableAmount} symbol={symbol} />}
          />
          <ClaimStatBalance
            title="Pending amount"
            loading={isLoading}
            bold={false}
            value={<FormatToken amount={pendingAmount} symbol={symbol} />}
          />
        </ClaimStat>
        <ClaimCardEdit onClick={() => setShowSelectModal(true)}>
          Edit reward claims
        </ClaimCardEdit>
      </ClaimCard>
      <SubmitOrConnect
        label={`Claim ${claimAmount} ${symbol}`}
        isLoading={false}
        submit={handleSubmit}
      />
      <SelectTokenModal
        tokens={tokens}
        show={showSelectModal}
        onClose={() => setShowSelectModal(false)}
        save={setTokens}
      />
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

export default Claim;
