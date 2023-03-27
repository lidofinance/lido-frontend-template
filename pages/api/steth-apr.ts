import {
  API,
  wrapRequest,
  cacheControl,
  defaultErrorHandler,
  responseTimeMetric,
} from '@lidofinance/next-api-wrapper';

import { API_ROUTES, CACHE_DEFAULT_HEADERS } from 'consts';
import { apiTimings, rateLimit, serverLogger } from 'utilsApi';

/**
 * PAY ATTENTION: Example showing how to use API wrappers (error handler and cache control).
 * Proxy example for third-party API.
 * @returns {Number} Returns just number of stETH annual percentage rate after lido fee is applied.
 */
const stethApr: API = (_, res) => {
  const mockData = 4.5;
  res.json(mockData);
};

export default wrapRequest([
  rateLimit,
  responseTimeMetric(apiTimings, API_ROUTES.STETH_APR),
  cacheControl({
    headers: CACHE_DEFAULT_HEADERS,
  }),
  defaultErrorHandler({ serverLogger }),
])(stethApr);
