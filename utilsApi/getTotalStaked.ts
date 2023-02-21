import { formatEther } from '@ethersproject/units';
import { CHAINS } from '@lido-sdk/constants';
import { iterateUrls } from '@lidofinance/rpc';

import { getStethAddress, getStethContractFactory } from 'consts';

import { serverLogger } from './serverLogger';
import { rpcUrls } from './rpcUrls';
import { getStaticRpcBatchProvider } from './rpcProviders';

export const getTotalStaked = async (): Promise<string> => {
  const urls = rpcUrls[CHAINS.Mainnet];
  return iterateUrls(
    urls,
    (url) => getTotalStakedWithFallbacks(url),
    serverLogger.error,
  );
};

const getTotalStakedWithFallbacks = async (url: string): Promise<string> => {
  const staticProvider = getStaticRpcBatchProvider(CHAINS.Mainnet, url);

  const stethAddress = getStethAddress(CHAINS.Mainnet);
  const stethContractFactory = getStethContractFactory();
  const stethContract = stethContractFactory.connect(
    stethAddress,
    staticProvider,
  );

  const totalSupplyStWei = await stethContract.totalSupply();

  const totalSupplyStEth = formatEther(totalSupplyStWei);
  return Number(totalSupplyStEth).toFixed(8);
};
