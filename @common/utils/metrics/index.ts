import { Registry, collectDefaultMetrics } from 'prom-client';
import {
  collectStartupMetrics,
  rpcMetricsFactory,
} from '@lidofinance/api-metrics';

import { METRICS_PREFIX, dynamics } from 'config';
import buildInfoJson from 'build-info.json';

export const registry = new Registry();

if (process.env.NODE_ENV === 'production') {
  // https://github.com/lidofinance/warehouse/tree/main/packages/api/metrics
  collectStartupMetrics({
    prefix: METRICS_PREFIX,
    registry,
    defaultChain: String(dynamics.defaultChain),
    supportedChains: dynamics.supportedChains.map((chainId) => String(chainId)),
    version: process.env.npm_package_version ?? 'unversioned',
    commit: buildInfoJson.commit,
    branch: buildInfoJson.branch,
  });

  collectDefaultMetrics({ prefix: METRICS_PREFIX, register: registry });

  // Collect PRC metrics
  // https://github.com/lidofinance/warehouse/blob/main/packages/api/metrics/src/rpcMetricsFactory.ts
  rpcMetricsFactory(METRICS_PREFIX, registry);
}
