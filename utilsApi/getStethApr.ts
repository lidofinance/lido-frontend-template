import { BigNumber } from '@ethersproject/bignumber';
import { CHAINS } from '@lido-sdk/constants';
import { iterateUrls } from '@lidofinance/rpc';
import { serverLogger } from '@common/utils';

import { rpcUrls } from './rpcUrls';

import { getStaticRpcBatchProvider } from './rpcProviders';

import {
  getOracleAddress,
  getOracleContractFactory,
  getStethAddress,
  getStethContractFactory,
} from 'config';

export const getStethApr = async (): Promise<string> => {
  const urls = rpcUrls[CHAINS.Mainnet];
  return iterateUrls(urls, getStethAprWithFallbacks, serverLogger.error);
};

const getStethAprWithFallbacks = async (url: string): Promise<string> => {
  const staticProvider = getStaticRpcBatchProvider(CHAINS.Mainnet, url);

  const oracleAddress = getOracleAddress(CHAINS.Mainnet);
  const oracleContractFactory = getOracleContractFactory();
  const oracleContract = oracleContractFactory.connect(
    oracleAddress,
    staticProvider,
  );

  const stethAddress = getStethAddress(CHAINS.Mainnet);
  const stethContractFactory = getStethContractFactory();
  const stethContract = stethContractFactory.connect(
    stethAddress,
    staticProvider,
  );

  const [postTotalPooledEther, preTotalPooledEther, timeElapsed] =
    await oracleContract.getLastCompletedReportDelta();

  const secondsInYear = BigNumber.from(1000 * 60 * 60 * 24 * 365.25);

  // STETH APR = (postTotalPooledEther - preTotalPooledEther) * secondsInYear / (preTotalPooledEther * timeElapsed)
  // see: https://docs.lido.fi/contracts/lido-oracle#add-calculation-of-staker-rewards-apr
  const stethApr = postTotalPooledEther
    .sub(preTotalPooledEther)
    .mul(secondsInYear)
    .div(preTotalPooledEther.mul(timeElapsed));

  const lidoFee = await stethContract.getFee();

  const oneHundredPercentInBasisPoints = 100 * 100;
  const lidoFeeAsFraction = lidoFee / oneHundredPercentInBasisPoints;

  const stethAprAfterLidoFee = Number(stethApr) * (1 - lidoFeeAsFraction) * 0.1;

  return stethAprAfterLidoFee.toFixed(1);
};
