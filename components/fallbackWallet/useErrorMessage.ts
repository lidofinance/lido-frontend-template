import { UnsupportedChainIdError } from '@web3-react/core';
import { CHAINS } from 'config';
import { useConfig } from 'hooks';
import { useMemo } from 'react';

export const useErrorMessage = (error?: Error): string | undefined => {
  const { config } = useConfig();
  const { supportedChainIds } = config;

  const chains = useMemo(() => {
    const chains = supportedChainIds.map((chainId) => CHAINS[chainId]);
    const lastChain = chains.pop();

    return [chains.join(', '), lastChain].filter((chain) => chain).join(' or ');
  }, [supportedChainIds]);

  if (error instanceof UnsupportedChainIdError) {
    return `Unsupported chain. Please switch to ${chains} in your wallet`;
  }

  return error?.message;
};
