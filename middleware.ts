import { cacheControlMiddlewareFactory } from '@lidofinance/next-cache-files-middleware';

// TODO: go to Andrew for details
// use only for cache files
export const middleware = cacheControlMiddlewareFactory();

export const config = {
  // paths where use middleware
  matcher: ['/manifest.json', '/favicon:size*'],
};

export default middleware;
