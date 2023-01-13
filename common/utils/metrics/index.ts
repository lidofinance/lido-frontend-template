import { METRICS_PREFIX } from 'config';
import { collectDefaultMetrics, Registry } from 'prom-client';
import { buildInfo } from './buildInfo';
import { chainInfo } from './chainInfo';
import { contractInfo } from './contractInfo';
import { rpcResponse } from './rpcResponse';

const registry = new Registry();

if (process.env.NODE_ENV === 'production') {
  registry.registerMetric(buildInfo);
  registry.registerMetric(chainInfo);
  registry.registerMetric(contractInfo);
  registry.registerMetric(rpcResponse);

  collectDefaultMetrics({ prefix: METRICS_PREFIX, register: registry });
}

export { registry };
