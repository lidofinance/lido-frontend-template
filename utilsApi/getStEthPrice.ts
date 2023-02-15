import { CHAINS } from '@lido-sdk/constants';
import { iterateUrls } from '@lidofinance/rpc';

import { serverLogger } from '@common/utils';
import {
  getAggregatorStEthUsdPriceFeedAddress,
  getAggregatorContractFactory,
} from 'consts';

import { rpcUrls } from './rpcUrls';
import { getStaticRpcBatchProvider } from './rpcProviders';

export const getStEthPrice = async (): Promise<number> => {
  const urls = rpcUrls[CHAINS.Mainnet];
  return iterateUrls(
    urls,
    (url) => getStEthPriceWithFallbacks(url),
    serverLogger.error,
  );
};

const getStEthPriceWithFallbacks = async (url: string): Promise<number> => {
  const address = getAggregatorStEthUsdPriceFeedAddress(CHAINS.Mainnet);
  const staticProvider = getStaticRpcBatchProvider(CHAINS.Mainnet, url);

  const contractFactory = getAggregatorContractFactory();
  const contract = contractFactory.connect(address, staticProvider);

  const [decimals, latestAnswer] = await Promise.all([
    contract.decimals(),
    contract.latestAnswer(),
  ]);

  return latestAnswer.toNumber() / 10 ** decimals;
};
