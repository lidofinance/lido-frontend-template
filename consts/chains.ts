import { CHAINS } from '@lido-sdk/constants';

export type MAINNET_AND_GOERLI_CHAINS = Extract<
  CHAINS,
  CHAINS.Mainnet | CHAINS.Goerli
>;

export type SUBGRAPH_CHAINS = MAINNET_AND_GOERLI_CHAINS;
