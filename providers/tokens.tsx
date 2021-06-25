import { useWeb3React } from '@web3-react/core';
import { BigNumber } from '@ethersproject/bignumber';
import { ContractByToken, TOKENS } from 'config';
import { useChain, useTokenRpcSwr } from 'hooks';
import { createContext, useMemo, useCallback, useEffect, memo } from 'react';
import { Provider } from './types';
import { createRpcTokenContract, createWeb3TokenContract } from 'utils';

export type TokenContextValue<T extends TOKENS> = {
  contractWeb3: ContractByToken<T> | null;
  contractRpc: ContractByToken<T>;
  balance?: BigNumber;
  initialLoading: boolean;
  invalidateBalance: () => Promise<BigNumber | undefined>;
};

const getTokenProvider = <T extends TOKENS>(token: T) => {
  const TokenContext = createContext({} as TokenContextValue<T>);

  const TokenProvider: Provider = ({ children }) => {
    const { library, account } = useWeb3React();
    const chainId = useChain();
    const shouldFetch = !!account;

    const contractWeb3 = useMemo(
      () => createWeb3TokenContract<T>(chainId, token, library),
      [chainId, library],
    );

    const contractRpc = useMemo(
      () => createRpcTokenContract<T>(chainId, token),
      [chainId],
    );

    const {
      data: balance,
      initialLoading,
      mutate,
    } = useTokenRpcSwr(
      token as TOKENS,
      shouldFetch ? 'balanceOf' : null,
      account ?? '',
    );

    const invalidateBalance = useCallback(() => {
      return mutate(undefined, true);
    }, [mutate]);

    const subscribeToUpdates = useCallback(() => {
      if (!account || !library || !contractWeb3) return;

      try {
        const fromMe = contractWeb3.filters.Transfer(account, null);
        const toMe = contractWeb3.filters.Transfer(null, account);

        library.on(fromMe, invalidateBalance);
        library.on(toMe, invalidateBalance);

        return () => {
          library.off(fromMe, invalidateBalance);
          library.off(toMe, invalidateBalance);
        };
      } catch (e) {
        console.warn('Cannot subscribe to Transfer event');
      }
    }, [account, library, contractWeb3, invalidateBalance]);

    useEffect(subscribeToUpdates, [subscribeToUpdates]);

    const value = useMemo(
      () => ({
        contractWeb3,
        contractRpc,
        balance,
        initialLoading,
        invalidateBalance,
      }),
      [contractWeb3, contractRpc, balance, initialLoading, invalidateBalance],
    );

    return (
      <TokenContext.Provider value={value}>{children}</TokenContext.Provider>
    );
  };

  return {
    TokenContext,
    TokenProvider,
  };
};

export const steth = getTokenProvider(TOKENS.steth);

const StethProvider = memo(steth.TokenProvider);

const TokensProvider: Provider = ({ children }) => {
  return <StethProvider>{children}</StethProvider>;
};

export default TokensProvider;
