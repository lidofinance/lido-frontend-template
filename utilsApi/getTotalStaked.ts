import { formatEther } from '@ethersproject/units';
import { CHAINS } from '@lido-sdk/constants';
import { serverLogger } from '@common/utils';

import {
  getStethAddress,
  getStethContractFactory,
  HEALTHY_RPC_SERVICES_ARE_OVER,
} from 'consts';

import { rpcUrls } from './rpcUrls';
import { getStaticRpcBatchProvider } from './rpcProviders';

export const getTotalStaked = async (): Promise<string> => {
  const urls = rpcUrls[CHAINS.Mainnet];
  return getTotalStakedWithFallbacks(urls, 0);
};

const getTotalStakedWithFallbacks = async (
  urls: Array<string>,
  urlIndex: number,
): Promise<string> => {
  try {
    const staticProvider = getStaticRpcBatchProvider(
      CHAINS.Mainnet,
      urls[urlIndex],
    );

    const stethAddress = getStethAddress(CHAINS.Mainnet);
    const stethContractFactory = getStethContractFactory();
    const stethContract = stethContractFactory.connect(
      stethAddress,
      staticProvider,
    );

    const totalSupplyStWei = await stethContract.totalSupply();

    const totalSupplyStEth = formatEther(totalSupplyStWei);
    return Number(totalSupplyStEth).toFixed(8);
  } catch (error) {
    if (urlIndex >= urls.length - 1) {
      const error = `[getTotalStaked] ${HEALTHY_RPC_SERVICES_ARE_OVER}`;
      serverLogger.error(error);
      throw new Error(error);
    }
    return await getTotalStakedWithFallbacks(urls, urlIndex + 1);
  }
};