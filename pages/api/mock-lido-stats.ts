import {
  API,
  wrapRequest,
  cacheControl,
  defaultErrorHandler,
  responseTimeMetric,
} from '@lidofinance/next-api-wrapper';

import { API_ROUTES, CACHE_DEFAULT_HEADERS } from 'config';
import { rateLimit, requestsTimingIncoming, serverLogger } from 'utilsApi';

/**
 * PAY ATTENTION: Example showing how to use API wrappers (error handler and cache control).
 * Proxy example for third-party API.
 *
 * @typedef {Object} ShortLidoStats
 * @property {number} marketCap
 * @property {number} totalStaked
 * @property {number} uniqueAnytimeHolder
 * @property {number} uniqueHolders
 *
 * @returns {ShortLidoStats} Returns stETH token information.
 */
const mockLidoStats: API = (_, res) => {
  const mockData = {
    uniqueAnytimeHolders: 180443,
    uniqueHolders: 168792,
    totalStaked: 5873072.67502321,
    marketCap: 10021169145.625982,
  };

  res.status(200).json(mockData);
};

export default wrapRequest([
  rateLimit,
  responseTimeMetric(requestsTimingIncoming, API_ROUTES.LIDO_STATS),
  cacheControl({
    headers: CACHE_DEFAULT_HEADERS,
  }),
  defaultErrorHandler({ serverLogger }),
])(mockLidoStats);
