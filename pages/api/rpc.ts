import { trackedFetchRpcFactory } from '@lidofinance/api-rpc';
import {
  defaultErrorHandler,
  wrapRequest,
} from '@lidofinance/next-api-wrapper';
import { rpcFactory } from '@lidofinance/next-pages';

import { registry, responseTimeMetric } from '@common/utils/metrics';

import { API_ROUTES } from 'consts';
import { dynamics, serverRuntimeConfig } from 'config';
import { apiTimings, rateLimit, rpcUrls, serverLogger } from 'utilsApi';

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
  responseTimeMetric(apiTimings, API_ROUTES.RPC),
  defaultErrorHandler({ serverLogger: serverLogger }),
])(rpc);
