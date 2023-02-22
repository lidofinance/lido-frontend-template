import { rateLimitWrapper } from '@lidofinance/next-ip-rate-limit';

import { serverRuntimeConfig } from 'config';

export const rateLimit = rateLimitWrapper({
  rateLimit: serverRuntimeConfig.rateLimit,
  rateLimitTimeFrame: serverRuntimeConfig.rateLimitTimeFrame,
});
