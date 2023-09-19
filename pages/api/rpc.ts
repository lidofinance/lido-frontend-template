import { trackedFetchRpcFactory } from '@lidofinance/api-rpc';
import {
  defaultErrorHandler,
  wrapRequest,
  responseTimeMetric,
} from '@lidofinance/next-api-wrapper';
import { rpcFactory } from '@lidofinance/next-pages/api';

import { API_ROUTES, dynamics, serverRuntimeConfig } from 'config';
import {
  registry,
  requestsTimingIncoming,
  rateLimit,
  rpcUrls,
  serverLogger,
} from 'utilsApi';

const fetchRPC = trackedFetchRpcFactory({
  registry,
  prefix: dynamics.metricsPrefix,
});

const rpc = rpcFactory({
  fetchRPC,
  serverLogger,
  metrics: {
    prefix: dynamics.metricsPrefix,
    registry,
  },
  allowedRPCMethods: serverRuntimeConfig.allowedRpcMethods,
  defaultChain: dynamics.defaultChain,
  providers: rpcUrls,
});

export default wrapRequest([
  rateLimit,
  responseTimeMetric(requestsTimingIncoming, API_ROUTES.RPC),
  defaultErrorHandler({ serverLogger: serverLogger }),
])(rpc);
