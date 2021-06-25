import { getLinkToEtherscan, EtherscanEntities } from 'config';
import { useCallback } from 'react';
import { openWindow } from 'utils';
import { useChain } from './useChain';

type UseEtherscanOpen = (
  hash: string,
  entity?: EtherscanEntities,
) => () => void;

export const useEtherscanOpen: UseEtherscanOpen = (hash, entity) => {
  const chainId = useChain();

  return useCallback(() => {
    const link = getLinkToEtherscan(chainId, hash, entity);
    openWindow(link);
  }, [chainId, entity, hash]);
};
