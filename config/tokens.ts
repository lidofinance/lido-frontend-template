import { CHAINS } from './chains';

export enum TOKENS {
  steth = 'steth',
}

export type Token = keyof typeof TOKENS;

export const TOKENS_BY_NETWORK: {
  [key in CHAINS]: Record<Token, string>;
} = {
  [CHAINS.Mainnet]: {
    [TOKENS.steth]: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
  },
  [CHAINS.Ropsten]: {
    [TOKENS.steth]: '0x0000000000000000000000000000000000000000',
  },
  [CHAINS.Rinkeby]: {
    [TOKENS.steth]: '0xbA453033d328bFdd7799a4643611b616D80ddd97',
  },
  [CHAINS.Goerli]: {
    [TOKENS.steth]: '0x1643e812ae58766192cf7d2cf9567df2c37e9b7f',
  },
  [CHAINS.Kovan]: {
    [TOKENS.steth]: '0x0000000000000000000000000000000000000000',
  },
};

export const getTokenAddress = (chainId: CHAINS, token: Token): string =>
  TOKENS_BY_NETWORK[chainId][token];
