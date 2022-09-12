export const CACHE_DEFAULT_HEADERS =
  'public, max-age=180, stale-if-error=1200, stale-while-revalidate=60';

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
