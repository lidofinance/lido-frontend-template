import { useWeb3React } from '@web3-react/core';
import { BigNumber } from '@ethersproject/bignumber';
import { useEthRpcSwr } from 'hooks';
import { createContext, useMemo, useCallback, useEffect, memo } from 'react';
import { Provider } from './types';

export type EthContextValue = {
  balance?: BigNumber;
  initialLoading: boolean;
  invalidateBalance: () => Promise<BigNumber | undefined>;
};

export const EthContext = createContext({} as EthContextValue);

const EthProvider: Provider = ({ children }) => {
  const { account, library } = useWeb3React();
  const shouldFetch = !!account;

  const {
    data: balance,
    initialLoading,
    mutate,
  } = useEthRpcSwr(shouldFetch ? 'getBalance' : null, account ?? '', 'latest');

  const invalidateBalance = useCallback(() => {
    return mutate(undefined, true);
  }, [mutate]);

  const subscribeToUpdates = useCallback(() => {
    if (!account || !library) return;

    try {
      library.on('block', invalidateBalance);

      return () => {
        library.off('block', invalidateBalance);
      };
    } catch (e) {
      console.warn('Cannot subscribe to Block event');
    }
  }, [account, library, invalidateBalance]);

  useEffect(subscribeToUpdates, [subscribeToUpdates]);

  const value = useMemo(
    () => ({
      balance,
      initialLoading,
      invalidateBalance,
    }),
    [balance, initialLoading, invalidateBalance],
  );

  return <EthContext.Provider value={value}>{children}</EthContext.Provider>;
};

export default memo(EthProvider);
