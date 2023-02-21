import { trackedFetchRpcFactory } from '@lidofinance/api-rpc';
import {
  defaultErrorHandler,
  wrapRequest,
} from '@lidofinance/next-api-wrapper';
import { rpcFactory } from '@lidofinance/next-pages';

import { registry } from '@common/utils/metrics';
import { serverLogger } from 'utilsApi';

import { dynamics, serverRuntimeConfig } from 'config';
import { rpcUrls } from 'utilsApi/rpcUrls';

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

// Error handler wrapper
export default wrapRequest([
  defaultErrorHandler({ serverLogger: serverLogger }),
])(rpc);
