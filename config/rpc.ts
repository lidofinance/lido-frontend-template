import { CHAINS } from '@lido-sdk/constants';
import getConfig from 'next/config';

// TODO
const { serverRuntimeConfig } = getConfig();
const { basePath } = serverRuntimeConfig;

export const getBackendRPCPath = (chainId: CHAINS): string => {
  return `${basePath ?? ''}/api/rpc?chainId=${chainId}`;
};

export const backendRPC = {
  [CHAINS.Mainnet]: getBackendRPCPath(CHAINS.Mainnet),
  [CHAINS.Goerli]: getBackendRPCPath(CHAINS.Goerli),
  [CHAINS.Kovan]: getBackendRPCPath(CHAINS.Kovan),
  [CHAINS.Rinkeby]: getBackendRPCPath(CHAINS.Rinkeby),
  [CHAINS.Ropsten]: getBackendRPCPath(CHAINS.Ropsten),
};
