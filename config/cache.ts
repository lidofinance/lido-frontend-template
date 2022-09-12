import { CACHE_DEFAULT_HEADERS } from '@lidofinance/next-api-wrapper';

export const CACHE_ALLOWED_LIST_FILES_PATHS = [
  { path: /^\/favicon-?[^@]*.(svg|ico)?$/, headers: CACHE_DEFAULT_HEADERS },
  { path: /^\/manifest.json?$/, headers: CACHE_DEFAULT_HEADERS },
];

export const findCacheControlFileHeaders = (
  url?: string,
): string | undefined => {
  const requestPath = url?.split('?').shift();

  if (!requestPath) return;

  return CACHE_ALLOWED_LIST_FILES_PATHS.find((item) =>
    item.path.test(requestPath),
  )?.headers;
};
