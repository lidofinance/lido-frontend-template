import { CHAINS } from '@lido-sdk/constants';

import { serverRuntimeConfig } from 'config';
import { SubgraphChains } from 'types';

export const SUBGRAPH_URL = {
  [CHAINS.Mainnet]: serverRuntimeConfig.subgraphMainnet,
  [CHAINS.Goerli]: serverRuntimeConfig.subgraphGoerli,
} as const;

export const getSubgraphUrl = (chainId: SubgraphChains): string | undefined => {
  return SUBGRAPH_URL[chainId];
};
