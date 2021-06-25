import { CHAINS } from './chains';
import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();
const { basePath, infuraApiKey, alchemyApiKey } = serverRuntimeConfig;

const NO_API_KEY_ERROR =
  'There are no API keys in env. Please, check your configuration';

export const getInfuraRpcUrl = (chainId: CHAINS, apiKey: string): string => {
  switch (chainId) {
    case CHAINS.Mainnet:
      return `https://mainnet.infura.io/v3/${apiKey}`;
    case CHAINS.Ropsten:
      return `https://ropsten.infura.io/v3/${apiKey}`;
    case CHAINS.Rinkeby:
      return `https://rinkeby.infura.io/v3/${apiKey}`;
    case CHAINS.Goerli:
      return `https://goerli.infura.io/v3/${apiKey}`;
    case CHAINS.Kovan:
      return `https://kovan.infura.io/v3/${apiKey}`;
    default:
      throw new Error(`Chain ${chainId} is not supported`);
  }
};

export const getAlchemyRpcUrl = (chainId: CHAINS, apiKey: string): string => {
  switch (chainId) {
    case CHAINS.Mainnet:
      return `https://eth-mainnet.alchemyapi.io/v2/${apiKey}`;
    case CHAINS.Ropsten:
      return `https://eth-ropsten.alchemyapi.io/v2/${apiKey}`;
    case CHAINS.Rinkeby:
      return `https://eth-rinkeby.alchemyapi.io/v2/${apiKey}`;
    case CHAINS.Goerli:
      return `https://eth-goerli.alchemyapi.io/v2/${apiKey}`;
    case CHAINS.Kovan:
      return `https://eth-kovan.alchemyapi.io/v2/${apiKey}`;
    default:
      throw new Error(`Chain ${chainId} is not supported`);
  }
};

export const getRpcJsonUrls = (chainId: CHAINS): string[] => {
  const urls = [];

  if (infuraApiKey) urls.push(getInfuraRpcUrl(chainId, infuraApiKey));
  if (alchemyApiKey) urls.push(getAlchemyRpcUrl(chainId, alchemyApiKey));

  if (!urls.length) {
    throw new Error(NO_API_KEY_ERROR);
  }

  return urls;
};

export const getRpcPath = (chainId: CHAINS): string => {
  if (!CHAINS[chainId]) {
    throw new Error(`Chain ${chainId} is not supported`);
  }

  return `${basePath ?? ''}/api/rpc?chainId=${chainId}`;
};
