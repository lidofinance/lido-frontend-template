import { cacheControlMiddlewareFactory } from '@lidofinance/next-cache-files-middleware';

export const CACHE_HEADERS_HTML_PAGE =
  'public, max-age=30, stale-if-error=1200, stale-while-revalidate=30';
export const CACHE_ALLOWED_LIST_FILES_PATHS = [
  { path: '/', headers: CACHE_HEADERS_HTML_PAGE },
  { path: '/example', headers: CACHE_HEADERS_HTML_PAGE },
  // PAY ATTENTION: Extra paths can be added here
];

// use only for cache files
export const middleware = cacheControlMiddlewareFactory(
  // TODO: add '/runtime/window-env.js'
  CACHE_ALLOWED_LIST_FILES_PATHS,
);

export const config = {
  // paths where use middleware
  matcher: [
    // TODO: add '/runtime/window-env.js'
    '/manifest.json',
    '/favicon:size*',
    '/',
    '/example',
    // PAY ATTENTION: Extra paths can be added here
  ],
};

export default middleware;
