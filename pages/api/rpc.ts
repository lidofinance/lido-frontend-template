import { trackedFetchRpcFactory } from '@lidofinance/api-rpc';
import {
  defaultErrorHandler,
  wrapRequest,
} from '@lidofinance/next-api-wrapper';
import { rpcFactory } from '@lidofinance/next-pages';

import { registry } from '@common/utils/metrics';
import { serverLogger } from '@common/utils';

import { METRICS_PREFIX, dynamics } from 'config';
import { rpcUrls } from 'utilsApi/rpcUrls';

const fetchRPC = trackedFetchRpcFactory({
  registry,
  prefix: METRICS_PREFIX,
});

const rpc = rpcFactory({
  fetchRPC,
  serverLogger,
  metrics: {
    prefix: METRICS_PREFIX,
    registry,
  },
  allowedRPCMethods: [
    // TODO
    'eth_call',
    'eth_gasPrice',
    'eth_requestAccounts',
    'eth_getBalance',
    'eth_getBlockByNumber',
    'eth_estimateGas',
    // PAY ATTENTION: Extra RPC methods can be added here
  ],
  defaultChain: dynamics.defaultChain,
  providers: rpcUrls,
});

// Error handler wrapper
export default wrapRequest([
  defaultErrorHandler({ serverLogger: serverLogger }),
])(rpc);
