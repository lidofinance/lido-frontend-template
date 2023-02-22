import { Cache } from 'memory-cache';
import {
  API,
  wrapRequest,
  cacheControl,
  defaultErrorHandler,
} from '@lidofinance/next-api-wrapper';

import { responseTimeMetric } from '@common/utils/metrics';

import { dynamics } from 'config';
import {
  API_ROUTES,
  CACHE_DEFAULT_HEADERS,
  CACHE_LIDO_SHORT_STATS_KEY,
  CACHE_LIDO_SHORT_STATS_TTL,
} from 'consts';
import { SubgraphChains } from 'types';
import {
  getTotalStaked,
  getLidoHoldersViaSubgraphs,
  getStEthPrice,
  rateLimit,
  parallelizePromisesServerSide,
  apiTimings,
  serverLogger,
} from 'utilsApi';

const cache = new Cache<string, unknown>();

/**
 * PAY ATTENTION: Example showing how to use API wrappers (error handler and cache control).
 * Proxy example for third-party API.
 *
 * @typedef {Object} ShortLidoStats
 * @property {number} marketCap
 * @property {string} totalStaked - number as string
 * @property {string} uniqueAnytimeHolder - number as string
 * @property {string} uniqueHolders - number as string
 *
 * @returns {ShortLidoStats} Returns stETH token information.
 */
const shortLidoStats: API = async (req, res) => {
  const chainId =
    (Number(req.query.chainId) as SubgraphChains) || dynamics.defaultChain;
  const cacheKey = `${CACHE_LIDO_SHORT_STATS_KEY}_${chainId}`;

  const cachedLidoStats = cache.get(cacheKey);
  if (cachedLidoStats) {
    res.status(200).json(cachedLidoStats);
  } else {
    const [lidoHolders, totalStaked, stEthPrice] =
      await parallelizePromisesServerSide([
        getLidoHoldersViaSubgraphs(chainId),
        getTotalStaked(),
        getStEthPrice(),
      ]);

    const shortLidoStats = {
      uniqueAnytimeHolders: lidoHolders?.data?.stats?.uniqueAnytimeHolders,
      uniqueHolders: lidoHolders?.data?.stats?.uniqueHolders,
      totalStaked,
      marketCap: Number(totalStaked) * stEthPrice,
    };

    // set the cache if there is all the data
    // because right now there is no request error handling in parallelizePromises
    if (lidoHolders && totalStaked && stEthPrice) {
      cache.put(cacheKey, shortLidoStats, CACHE_LIDO_SHORT_STATS_TTL);
    }

    res.status(200).json(shortLidoStats);
  }
};

export default wrapRequest([
  rateLimit,
  responseTimeMetric(apiTimings, API_ROUTES.SHORT_LIDO_STATS),
  cacheControl({
    headers: CACHE_DEFAULT_HEADERS,
  }),
  defaultErrorHandler({ serverLogger }),
])(shortLidoStats);
