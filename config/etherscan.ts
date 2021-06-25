import { CHAINS } from './chains';

const ETHERSCAN_SUBDOMAINS_BY_NETWORK: {
  [key in CHAINS]: string;
} = {
  [CHAINS.Mainnet]: '',
  [CHAINS.Ropsten]: 'ropsten.',
  [CHAINS.Rinkeby]: 'rinkeby.',
  [CHAINS.Goerli]: 'goerli.',
  [CHAINS.Kovan]: 'kovan.',
};

export type EtherscanEntities = 'tx' | 'token' | 'address';

export const getLinkToEtherscan = (
  chainId: CHAINS,
  hash: string,
  entity: EtherscanEntities = 'tx',
): string => {
  return `https://${
    ETHERSCAN_SUBDOMAINS_BY_NETWORK[chainId] ?? ''
  }etherscan.io/${entity}/${hash}`;
};
