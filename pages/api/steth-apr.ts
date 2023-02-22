import { Cache } from 'memory-cache';
import {
  API,
  wrapRequest,
  cacheControl,
  defaultErrorHandler,
} from '@lidofinance/next-api-wrapper';
import { rateLimit, serverLogger } from 'utilsApi';

import {
  CACHE_STETH_APR_KEY,
  CACHE_STETH_APR_TTL,
  CACHE_DEFAULT_HEADERS,
} from 'consts';
import { getStEthApr } from 'utilsApi/getStEthApr';

const cache = new Cache<typeof CACHE_STETH_APR_KEY, string>();

/**
 * PAY ATTENTION: Example showing how to use API wrappers (error handler and cache control).
 * Proxy example for third-party API.
 * @returns {Number} Returns just number of stETH annual percentage rate after lido fee is applied.
 */
const stethApr: API = async (req, res) => {
  const cachedStETHApr = cache.get(CACHE_STETH_APR_KEY);

  if (cachedStETHApr) {
    res.json(cachedStETHApr);
  } else {
    const stethApr = await getStEthApr();
    cache.put(CACHE_STETH_APR_KEY, stethApr, CACHE_STETH_APR_TTL);

    res.json(stethApr);
  }
};

export default wrapRequest([
  rateLimit,
  cacheControl({
    headers: CACHE_DEFAULT_HEADERS,
  }),
  defaultErrorHandler({ serverLogger }),
])(stethApr);
