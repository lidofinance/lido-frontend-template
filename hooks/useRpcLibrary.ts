import { JsonRpcProvider } from '@ethersproject/providers';
import { getRpcPath } from 'config';
import { useMemo } from 'react';
import { useChain } from './useChain';

export const useRpcLibrary = (): JsonRpcProvider => {
  const chainId = useChain();

  return useMemo(() => {
    return new JsonRpcProvider(getRpcPath(chainId), chainId);
  }, [chainId]);
};
