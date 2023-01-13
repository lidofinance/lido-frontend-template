import { METRICS_PREFIX } from 'config';
import { Histogram } from 'prom-client';

// todo: use https://github.com/lidofinance/warehouse/blob/main/packages/api/metrics/src/rpcMetricsFactory.ts
export const rpcResponse = new Histogram({
  name: METRICS_PREFIX + 'ethereum_response',
  help: 'Ethereum RCP response',
  labelNames: ['provider'],
  buckets: [0.1, 0.2, 0.3, 0.6, 1, 1.5, 2, 5],
  registers: [],
});
