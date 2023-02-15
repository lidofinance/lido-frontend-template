import ms from 'ms';

export const CACHE_STETH_APR_KEY = 'cache-steth-apr';
export const CACHE_STETH_APR_TTL = ms('1h');

export const CACHE_LIDO_SHORT_STATS_KEY = 'cache-short-lido-stats';
export const CACHE_LIDO_SHORT_STATS_TTL = ms('1h');

export const CACHE_LIDO_HOLDERS_VIA_SUBGRAPHS_KEY =
  'cache-lido-holders-via-subgraphs';
export const CACHE_LIDO_HOLDERS_VIA_SUBGRAPHS_TTL = ms('7d');

export const CACHE_DEFAULT_HEADERS =
  'public, max-age=180, stale-if-error=1200, stale-while-revalidate=60';
