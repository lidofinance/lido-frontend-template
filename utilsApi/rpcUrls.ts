import { CHAINS } from '@lido-sdk/constants';
import { serverRuntimeConfig } from 'config';

const { infuraApiKey, alchemyApiKey } = serverRuntimeConfig;

export const rpcUrls: Record<string | number, [string, ...string[]]> = {
  [CHAINS.Mainnet]: [
    `https://mainnet.infura.io/v3/${infuraApiKey}`,
    `https://eth-mainnet.alchemyapi.io/v2/${alchemyApiKey}`,
  ],
  [CHAINS.Goerli]: [
    `https://goerli.infura.io/v3/${infuraApiKey}`,
    `https://eth-goerli.alchemyapi.io/v2/${alchemyApiKey}`,
  ],
};
