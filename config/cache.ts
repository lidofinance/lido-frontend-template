import ms from 'ms';

export const CACHE_STETH_APR_KEY = 'cache-steth-apr';
export const CACHE_STETH_APR_TTL = ms('1h');

export const CACHE_DEFAULT_HEADERS =
  'public, max-age=180, stale-if-error=1200, stale-while-revalidate=60';
