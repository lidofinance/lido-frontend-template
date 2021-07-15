import { CHAINS } from '@lido-sdk/constants';
import { getRPCUrls } from '@lido-sdk/fetch';
import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();
const { basePath, infuraApiKey, alchemyApiKey } = serverRuntimeConfig;

const NO_API_KEY_ERROR =
  'There are no API keys in env. Please, check your configuration';

export const getRpcJsonUrls = (chainId: CHAINS): string[] => {
  const urls = getRPCUrls(chainId, {
    alchemy: alchemyApiKey,
    infura: infuraApiKey,
  });

  if (!urls.length) {
    throw new Error(NO_API_KEY_ERROR);
  }

  return urls;
};

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
