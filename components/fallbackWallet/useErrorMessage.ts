import { useSupportedChains, useWeb3 } from '@reef-knot/web3-react';
import { CHAINS } from '@lido-sdk/constants';
import { useMemo } from 'react';

export const useErrorMessage = (): string | undefined => {
  const { error } = useWeb3();
  const { isUnsupported, supportedChains } = useSupportedChains();

  const chains = useMemo(() => {
    const chains = supportedChains.map(
      ({ chainId, name }) => CHAINS[chainId] || name,
    );
    const lastChain = chains.pop();

    return [chains.join(', '), lastChain].filter((chain) => chain).join(' or ');
  }, [supportedChains]);

  if (isUnsupported) {
    return `Unsupported chain. Please switch to ${chains} in your wallet`;
  }

  return error?.message;
};
