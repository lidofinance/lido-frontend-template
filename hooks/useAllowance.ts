import { BigNumber } from '@ethersproject/bignumber';
import { Zero } from '@ethersproject/constants';
import { useWeb3React } from '@web3-react/core';
import { TOKENS } from 'config';
import { useTokenRpcSwr } from 'hooks';
import { useCallback, useEffect, useMemo } from 'react';
import { createWeb3TokenContract } from 'utils';
import { useChain } from './useChain';

type UseAllowance = (
  token: TOKENS,
  spender: string,
) => {
  allowance: BigNumber;
  initialLoading: boolean;
  invalidateAllowance: () => Promise<BigNumber | undefined>;
};

export const useAllowance: UseAllowance = (token, spender) => {
  const { account, library } = useWeb3React();
  const chainId = useChain();
  const shouldFetch = !!account;

  const contractWeb3 = useMemo(
    () => createWeb3TokenContract(chainId, token, library),
    [chainId, library, token],
  );

  const {
    data: allowance,
    mutate,
    initialLoading,
  } = useTokenRpcSwr(
    token,
    shouldFetch ? 'allowance' : null,
    account ?? '',
    spender,
  );

  const invalidateAllowance = useCallback(() => {
    return mutate(undefined, true);
  }, [mutate]);

  const subscribeToUpdates = useCallback(() => {
    if (!account || !library || !contractWeb3) return;

    try {
      const transfer = contractWeb3.filters.Transfer(account, spender);
      const approve = contractWeb3.filters.Approval(account, spender, null);

      library.on(transfer, invalidateAllowance);
      library.on(approve, invalidateAllowance);

      return () => {
        library.off(transfer, invalidateAllowance);
        library.off(approve, invalidateAllowance);
      };
    } catch (e) {
      console.warn('Cannot subscribe to events');
    }
  }, [account, library, contractWeb3, spender, invalidateAllowance]);

  useEffect(subscribeToUpdates, [subscribeToUpdates]);

  return {
    allowance: allowance ?? Zero,
    initialLoading,
    invalidateAllowance,
  };
};
