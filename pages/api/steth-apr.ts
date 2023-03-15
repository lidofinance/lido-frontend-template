import { Cache } from 'memory-cache';
import {
  API,
  wrapRequest,
  cacheControl,
  defaultErrorHandler,
  responseTimeMetric,
} from '@lidofinance/next-api-wrapper';

import {
  API_ROUTES,
  CACHE_STETH_APR_KEY,
  CACHE_STETH_APR_TTL,
  CACHE_DEFAULT_HEADERS,
} from 'consts';
import { apiTimings, rateLimit, serverLogger, getStEthApr } from 'utilsApi';

const cache = new Cache<typeof CACHE_STETH_APR_KEY, string>();

/**
 * PAY ATTENTION: Example showing how to use API wrappers (error handler and cache control).
 * Proxy example for third-party API.
 * @returns {Number} Returns just number of stETH annual percentage rate after lido fee is applied.
 */
const stethApr: API = async (_, res) => {
  const cachedStETHApr = cache.get(CACHE_STETH_APR_KEY);

  if (cachedStETHApr) {
    res.json(cachedStETHApr);
  } else {
    const freshedStETHApr = await getStEthApr();
    cache.put(CACHE_STETH_APR_KEY, freshedStETHApr, CACHE_STETH_APR_TTL);

    res.json(freshedStETHApr);
  }
};

export default wrapRequest([
  rateLimit,
  responseTimeMetric(apiTimings, API_ROUTES.STETH_APR),
  cacheControl({
    headers: CACHE_DEFAULT_HEADERS,
  }),
  defaultErrorHandler({ serverLogger }),
])(stethApr);
