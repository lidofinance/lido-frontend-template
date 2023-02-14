import { CHAINS } from '@lido-sdk/constants';
import { AggregatorAbi__factory } from 'generated';

// TODO: DRY
type MAINNET_GOERLI_CHAINS = CHAINS.Mainnet | CHAINS.Goerli;

// Chainlink: ETH/USD Price Feed
// https://data.chain.link/ethereum/mainnet/crypto-usd/eth-usd
// https://etherscan.io/address/0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419
export const AGGREGATOR_BY_NETWORK: {
  [key in MAINNET_GOERLI_CHAINS]: string;
} = {
  [CHAINS.Mainnet]: '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419',
  [CHAINS.Goerli]: '0x0000000000000000000000000000000000000000',
};

export const getAggregatorAddress = (
  chainId: MAINNET_GOERLI_CHAINS,
): string => {
  return AGGREGATOR_BY_NETWORK[chainId];
};

// Chainlink: STETH/USD Price Feed
// https://data.chain.link/ethereum/mainnet/crypto-usd/steth-usd
// https://etherscan.io/address/0xcfe54b5cd566ab89272946f602d76ea879cab4a8
export const AGGREGATOR_STETH_USD_PRICE_FEED_BY_NETWORK: {
  [key in MAINNET_GOERLI_CHAINS]: string;
} = {
  [CHAINS.Mainnet]: '0xcfe54b5cd566ab89272946f602d76ea879cab4a8',
  [CHAINS.Goerli]: '0x0000000000000000000000000000000000000000',
};

export const getAggregatorStEthUsdPriceFeedAddress = (
  chainId: MAINNET_GOERLI_CHAINS,
): string => {
  return AGGREGATOR_STETH_USD_PRICE_FEED_BY_NETWORK[chainId];
};

export type ContractAggregator = typeof AggregatorAbi__factory;

export const getAggregatorContractFactory = (): ContractAggregator => {
  return AggregatorAbi__factory;
};
