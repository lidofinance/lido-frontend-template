// PAY ATTENTION: Example showing how to configuration custom metrics
import { Gauge } from 'prom-client';
import { CHAINS } from '@lido-sdk/constants';

import { dynamics } from 'config';
import { getStethAddress } from 'consts';

const chainId = +dynamics.defaultChain as CHAINS;

const contracts: Record<string, string> = {
  stETH: getStethAddress(chainId as CHAINS.Mainnet | CHAINS.Goerli),
};

const contractNames = Object.keys(contracts);
const contractAddrs = contractNames.map((cName) => contracts[cName]);

export const contractInfo = new Gauge({
  name: dynamics.metricsPrefix + 'contract_info',
  help: `Contract configuration for default chain (${CHAINS[chainId]})`,
  labelNames: contractNames,
  registers: [],
});

contractInfo.labels(...contractAddrs).set(1);
