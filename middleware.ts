import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { findCacheControlFileHeaders } from 'config/cache';

// use only for cache files
const middleware = (req: NextRequest): NextResponse => {
  const response = NextResponse.next();
  const methodName = req.nextUrl.pathname;

  // Use allowed list
  const headers = findCacheControlFileHeaders(methodName);
  if (!headers) return response;

  response.headers.append('Cache-Control', headers);

  return response;
};

export const config = {
  // paths where use middleware
  matcher: ['/manifest.json', '/favicon:size*'],
};

export default middleware;
