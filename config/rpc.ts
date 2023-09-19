import { CHAINS } from '@lido-sdk/constants';

export const getBackendRPCPath = (chainId: CHAINS): string => {
  const BASE_URL = typeof window === 'undefined' ? '' : window.location.origin;
  return `${BASE_URL}/api/rpc?chainId=${chainId}`;
};

export const backendRPC = {
  [CHAINS.Mainnet]: getBackendRPCPath(CHAINS.Mainnet),
  [CHAINS.Goerli]: getBackendRPCPath(CHAINS.Goerli),
  [CHAINS.Kovan]: getBackendRPCPath(CHAINS.Kovan),
  [CHAINS.Rinkeby]: getBackendRPCPath(CHAINS.Rinkeby),
  [CHAINS.Ropsten]: getBackendRPCPath(CHAINS.Ropsten),
};
