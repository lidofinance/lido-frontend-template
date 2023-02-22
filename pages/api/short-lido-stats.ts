import { Cache } from 'memory-cache';
import {
  API,
  wrapRequest,
  cacheControl,
  defaultErrorHandler,
} from '@lidofinance/next-api-wrapper';
import { rateLimit, serverLogger } from 'utilsApi';

import { dynamics } from 'config';
import {
  CACHE_DEFAULT_HEADERS,
  CACHE_LIDO_SHORT_STATS_KEY,
  CACHE_LIDO_SHORT_STATS_TTL,
} from 'consts';
import { SubgraphChains } from 'types';
import { parallelizePromises } from 'utils';
import {
  getTotalStaked,
  getLidoHoldersViaSubgraphs,
  getStEthPrice,
} from 'utilsApi';

const cache = new Cache<string, unknown>();

// Proxy for third-party API.
// Returns stETH token information
const shortLidoStats: API = async (req, res) => {
  const chainId =
    (Number(req.query.chainId) as SubgraphChains) || dynamics.defaultChain;
  const cacheKey = `${CACHE_LIDO_SHORT_STATS_KEY}_${chainId}`;

  const cachedLidoStats = cache.get(cacheKey);
  if (cachedLidoStats) {
    res.status(200).json(cachedLidoStats);
  } else {
    const [lidoHolders, totalStaked, stEthPrice] = await parallelizePromises([
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
  // TODO
  // responseTimeMetric(Metrics.request.apiTimings, API_ROUTES.SHORT_LIDO_STATS),
  cacheControl({
    headers: CACHE_DEFAULT_HEADERS,
  }),
  defaultErrorHandler({ serverLogger }),
])(shortLidoStats);
