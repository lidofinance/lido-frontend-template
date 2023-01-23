import { Gauge } from 'prom-client';
import { CHAINS } from '@lido-sdk/constants';
import { dynamics, getExampleAddress, METRICS_PREFIX } from 'config';

const chainId = +dynamics.defaultChain as CHAINS;

const contracts: Record<string, string> = {
  example: getExampleAddress(chainId),
};

const contractNames = Object.keys(contracts);
const contractAddrs = contractNames.map((cName) => contracts[cName]);

export const contractInfo = new Gauge({
  name: METRICS_PREFIX + 'contract_info',
  help: `Contract configuration for default chain (${CHAINS[chainId]})`,
  labelNames: contractNames,
  registers: [],
});

contractInfo.labels(...contractAddrs).set(1);
