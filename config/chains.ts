export enum CHAINS {
  Mainnet = 1,
  Ropsten = 3,
  Rinkeby = 4,
  Goerli = 5,
  Kovan = 42,
}

export const CHAINS_COLORS: {
  [key in CHAINS]: string;
} = {
  [CHAINS.Mainnet]: '#29b6af',
  [CHAINS.Ropsten]: '#ff4a8d',
  [CHAINS.Rinkeby]: '#f6c343',
  [CHAINS.Goerli]: '#3099f2',
  [CHAINS.Kovan]: '#9064ff',
};

export const getChainColor = (chainId: CHAINS): string => {
  return CHAINS_COLORS[chainId];
};
