import React, { FC, useState, useEffect, useRef } from 'react';
import { Block, Box } from '@lidofinance/lido-ui';
import { useContractSWR, useSDK } from '@lido-sdk/react';
import { useWeb3 } from '@lido-sdk/web3-react';
import notify from 'utils/notify';
import { BigNumber, ContractTransaction } from 'ethers';
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
  retry: false,
};

const Claim: FC<{ changeTab: (tab: string) => void }> = ({ changeTab }) => {
  const { account } = useSDK();
  const lidoNFTRPC = useLidoNFTRPC();
  const lidoMaticWeb3 = useLidoMaticWeb3();
  const maticTokenWeb3 = useMaticTokenWeb3();
  const stakeManagerWeb3 = useStakeManagerWeb3();
  const stakeManagerRPC = useStakeManagerRPC();
  const { active } = useWeb3();
  const [delay, setDelay] = useState(0);

  const [status, setStatus] = useState(initialStatus);
  const [isLoading, setIsLoading] = useState(false);
  const [showSelectModal, setShowSelectModal] = useState(false);
  const [tokens, setTokens] = useState<TokenOption[]>([]);
  const [claimableAmount, setClaimableAmount] = useState(BigNumber.from(0));
  const [pendingAmount, setPendingAmount] = useState(BigNumber.from(0));
  const [symbol, setSymbol] = useState('MATIC');
  const [claimAmount, setClaimAmount] = useState('0');
  const invalidClaims = useRef<ContractTransaction[]>();

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
        let claimableAmount = BigNumber.from(0);
        let pendingAmount = BigNumber.from(0);
        const result = await Promise.all(
          rawTokens?.map((id) => {
            return lidoMaticWeb3.token2WithdrawRequest(id);
          }),
        );
        const tokens = [];
        for (let i = 0; i < result.length; i++) {
          const token = result[i];
          const amount = token?.amount2WithdrawFromStMATIC.eq('0')
            ? await lidoMaticWeb3.getMaticFromTokenId(rawTokens[i])
            : token?.amount2WithdrawFromStMATIC;
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
          tokens.push({
            value: rawTokens[i],
            amount,
            text: `${amount} - Available ${
              available ? '' : `in: ${epochs} epochs`
            }`,
            available,
            checked: available,
          });
        }
        setTokens(tokens);
        setClaimableAmount(claimableAmount);
        setPendingAmount(pendingAmount);
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
    if (active) {
      fetchTokens();
    } else {
      setClaimableAmount(BigNumber.from(0));
      setPendingAmount(BigNumber.from(0));
    }
  }, [active]);

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
        if (token.checked) {
          acc = acc.add(token.amount);
        }
        return acc;
      }, BigNumber.from(0)),
    );
    setClaimAmount(claimAmount);
  }, [JSON.stringify(tokens)]);

  const handleSubmit = async () => {
    // e.preventDefault();
    if (lidoMaticWeb3 && tokens.length) {
      setIsLoading(true);
      setStatus({
        title: 'You are now claiming your reward',
        subtitle: `Claiming ${claimAmount} ${symbol}`,
        additionalDetails: 'Confirm this transaction in your wallet',
        type: 'loading',
        link: '',
        show: true,
        retry: true,
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
        setStatus({
          title: 'You are now claiming your reward',
          subtitle: `Claiming ${claimAmount} ${symbol}`,
          additionalDetails: 'Processing your transaction',
          type: 'loading',
          link: '',
          show: true,
          retry: false,
        });
        let results;
        if (invalidClaims.current?.length) {
          results = await Promise.all(
            invalidClaims.current.map((claim) =>
              claim.wait().catch((ex) => ex),
            ),
          );
        } else {
          results = await Promise.all(
            claims.map((claim) => claim.wait().catch((ex) => ex)),
          );
          invalidClaims.current = [];
        }
        const validResults = results.filter((result) => result.status);
        invalidClaims.current = claims.slice(
          validResults.length,
          claims.length - 1,
        );

        await fetchTokens();
        setIsLoading(false);
        if (invalidClaims.current.length) {
          setStatus({
            title: 'Some rewards failed to claim',
            subtitle: `Something went wrong`,
            additionalDetails:
              'If you would like to claim again missing rewards please click retry',
            type: 'error',
            link: '',
            show: true,
            retry: true,
          });
        } else {
          setStatus({
            title: 'Reward claimed',
            subtitle: `You have claimed ${claimAmount} ${symbol}`,
            additionalDetails: '',
            type: 'success',
            link: '',
            show: true,
            retry: false,
          });
        }
        setIsLoading(false);
      } catch (ex: any) {
        if (ex.message.length > 45) {
          notify('Something went wrong', 'error');
        } else {
          notify(ex.message, 'error');
        }
        console.log(ex);
      }
    }
  };
  const handleShowSelectModal = (): void => {
    if (claimableAmount.gt(0)) {
      setShowSelectModal(true);
    }
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
        You will be able to claim your rewards after the withdraw request has
        been processed. To unstake your amount go to
        {
          // eslint-disable-next-line
          <span
            style={{ color: '#00A3FF', cursor: 'pointer' }}
            onClick={() => changeTab('UNSTAKE')}
          >
            {' Unstake '}
          </span>
        }
        tab
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
        <ClaimCardEdit
          onClick={handleShowSelectModal}
          disabled={claimableAmount.eq(0)}
        >
          Edit reward claims
        </ClaimCardEdit>
      </ClaimCard>
      <SubmitOrConnect
        submitLabel={`Claim ${claimAmount} ${symbol}`}
        isSubmitting={false}
        submit={handleSubmit}
        disabledSubmit={claimAmount === '0.0'}
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
        retry={status.retry}
        onRetry={handleSubmit}
      />
    </Block>
  );
};

export default Claim;
