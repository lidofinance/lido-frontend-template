import { CHAINS } from '@lido-sdk/constants';

export type SubgraphChains = Extract<CHAINS, CHAINS.Mainnet | CHAINS.Goerli>;
