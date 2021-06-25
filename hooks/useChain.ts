import { useWeb3React } from '@web3-react/core';
import { useConfig } from './useConfig';

export const useChain = (): number => {
  const { config } = useConfig();
  const { chainId = config.defaultChain } = useWeb3React();

  return chainId;
};
