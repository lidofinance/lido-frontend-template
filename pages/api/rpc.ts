import getConfig from 'next/config';

import { CHAINS } from '@lido-sdk/constants';
import { trackedFetchRpcFactory } from '@lidofinance/api-rpc';
import { rpcFactory } from '@lidofinance/next-pages';
import {
  defaultErrorHandler,
  wrapRequest,
} from '@lidofinance/next-api-wrapper';

import { serverLogger } from 'common/utils/serverLogger';
import { registry } from 'common/utils/metrics';

import { METRICS_PREFIX, dynamics } from 'config';

const { serverRuntimeConfig } = getConfig();

// TODO: make for SUPPORTED_CHAINS
const providers: Record<string | number, [string, ...string[]]> = {
  [CHAINS.Mainnet]: [
    `https://mainnet.infura.io/v3/${serverRuntimeConfig.infuraApiKey}`,
    `https://eth-mainnet.alchemyapi.io/v2/${serverRuntimeConfig.alchemyApiKey}`,
  ],
  [CHAINS.Rinkeby]: [
    `https://rinkeby.infura.io/v3/${serverRuntimeConfig.infuraApiKey}`,
    `https://eth-rinkeby.alchemyapi.io/v2/${serverRuntimeConfig.alchemyApiKey}`,
  ],
  [CHAINS.Goerli]: [
    `https://goerli.infura.io/v3/${serverRuntimeConfig.infuraApiKey}`,
    `https://eth-goerli.alchemyapi.io/v2/${serverRuntimeConfig.alchemyApiKey}`,
  ],
};

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
    'eth_call',
    'eth_gasPrice',
    'eth_requestAccounts',
    // PAY ATTENTION: Extra RPC methods can be added here
  ],
  defaultChain: dynamics.defaultChain,
  providers,
});

// Error handler wrapper
export default wrapRequest([
  defaultErrorHandler({ serverLogger: serverLogger }),
])(rpc);
