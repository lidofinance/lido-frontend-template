// More details https://github.com/lidofinance/warehouse/tree/main/packages/next/cache-files-middleware

import { cacheControlMiddlewareFactory } from '@lidofinance/next-cache-files-middleware';

export const CACHE_HEADERS_HTML_PAGE =
  'public, max-age=30, stale-if-error=1200, stale-while-revalidate=30';

export const CACHE_ALLOWED_LIST_FILES_PATHS = [
  { path: '/', headers: CACHE_HEADERS_HTML_PAGE },
  { path: '/example', headers: CACHE_HEADERS_HTML_PAGE },
  // TODO: to approve for window-env.js
  { path: '/runtime/window-env.js', headers: CACHE_HEADERS_HTML_PAGE },
  // PAY ATTENTION: Extra paths can be added here
];

// use only for cache files
export const middleware = cacheControlMiddlewareFactory(
  CACHE_ALLOWED_LIST_FILES_PATHS,
);

// Note: The matcher values need to be constants, so they can be statically analyzed at build-time.
// Dynamic values such as variables will be ignored.
export const config = {
  // paths where use middleware
  matcher: [
    '/manifest.json',
    '/favicon:size*',
    '/runtime/window-env.js',
    '/',
    '/example',
    // PAY ATTENTION: Extra paths can be added here
  ],
};

export default middleware;
