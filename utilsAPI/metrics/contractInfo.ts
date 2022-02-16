import { Gauge } from 'prom-client';
import getConfig from 'next/config';
import { CHAINS } from '@lido-sdk/constants';
import { getLidoMaticAddress, METRICS_PREFIX } from 'config';

const { publicRuntimeConfig } = getConfig();
const { defaultChain } = publicRuntimeConfig;

const chainId = +defaultChain as CHAINS;

const contracts: Record<string, string> = {
  addresses: getLidoMaticAddress(chainId),
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
