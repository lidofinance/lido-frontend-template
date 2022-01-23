import { CHAINS } from '@lido-sdk/constants';

export const SCANNERS: {
  [key in CHAINS]: string;
} = {
  [CHAINS.Mainnet]: 'https://etherscan.io/',
  [CHAINS.Ropsten]: 'https://ropsten.etherscan.io/',
  [CHAINS.Rinkeby]: 'https://rinkeby.etherscan.io/',
  [CHAINS.Goerli]: 'https://goerli.etherscan.io/',
  [CHAINS.Kovan]: 'https://kovan.etherscan.io/',
};
