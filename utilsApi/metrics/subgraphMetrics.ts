import { Histogram } from 'prom-client';
import { registry } from '@common/utils/metrics';

import { dynamics, METRIC_NAMES } from 'config';

const subgraphsResponseTimeInit = () => {
  const subgraphsResponseTimeName =
    dynamics.metricsPrefix + METRIC_NAMES.SUBGRAPHS_RESPONSE;

  return new Histogram({
    name: subgraphsResponseTimeName,
    help: 'Subgraphs response time seconds',
    buckets: [0.1, 0.2, 0.3, 0.6, 1, 1.5, 2, 5],
    registers: [registry],
  });
};

export const subgraphsResponseTime = subgraphsResponseTimeInit();
