import { CHAINS, TOKENS, getTokenAddress } from '@lido-sdk/constants';
import { StethAbi__factory } from 'generated';
import { MAINNET_AND_GOERLI_CHAINS } from './chains';

export const STETH_BY_NETWORK: {
  [key in MAINNET_AND_GOERLI_CHAINS]: string;
} = {
  [CHAINS.Mainnet]: getTokenAddress(CHAINS.Mainnet, TOKENS.STETH),
  [CHAINS.Goerli]: getTokenAddress(CHAINS.Mainnet, TOKENS.STETH),
};

export const getStethAddress = (chainId: MAINNET_AND_GOERLI_CHAINS): string => {
  return STETH_BY_NETWORK[chainId];
};

export type ContractSteth = typeof StethAbi__factory;

export const getStethContractFactory = (): ContractSteth => {
  return StethAbi__factory;
};

export const STETH_SUBMIT_GAS_LIMIT_DEFAULT = 90000;
