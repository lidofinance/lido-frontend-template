import { Counter, Histogram } from 'prom-client';
import { registry } from '@common/utils/metrics';

import { dynamics, METRIC_NAMES } from 'config';

const apiTimingsInit = (postfix: string) => {
  const postfixWithDash = postfix ? `_${postfix}` : '';
  const apiResponseName =
    dynamics.metricsPrefix + METRIC_NAMES.API_RESPONSE + postfixWithDash;

  return new Histogram({
    name: apiResponseName,
    help: 'API response time',
    labelNames: ['hostname', 'route', 'entity', 'status'],
    buckets: [0.1, 0.2, 0.3, 0.6, 1, 1.5, 2, 5],
    registers: [registry],
  });
};

const requestsCounterInit = () => {
  const requestsCounterName =
    dynamics.metricsPrefix + METRIC_NAMES.REQUESTS_TOTAL;

  return new Counter({
    name: requestsCounterName,
    help: 'Total number of requests for each valid route',
    labelNames: ['route', 'entity'],
    registers: [registry],
  });
};

export const apiTimings = apiTimingsInit('internal');
export const apiTimingsExternal = apiTimingsInit('external');
export const requestCounter = requestsCounterInit();
