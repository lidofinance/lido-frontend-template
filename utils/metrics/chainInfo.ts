import { Gauge } from 'prom-client';
import getConfig from 'next/config';
import { METRICS_PREFIX } from 'config';

const { publicRuntimeConfig } = getConfig();
const { defaultChain, supportedChains } = publicRuntimeConfig;

export const chainInfo = new Gauge({
  name: METRICS_PREFIX + 'chain_info',
  help: 'Default chain and supported chains of the current build',
  labelNames: ['default_chain', 'supported_chains'],
  registers: [],
});

chainInfo.labels(defaultChain, supportedChains).set(1);
