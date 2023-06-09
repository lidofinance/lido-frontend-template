import { CHAINS } from '@lido-sdk/constants';

import buildDynamics from './scripts/build-dynamics.mjs';

buildDynamics();

const basePath = process.env.BASE_PATH || '';
const infuraApiKey = process.env.INFURA_API_KEY;
const alchemyApiKey = process.env.ALCHEMY_API_KEY;
const apiProviderUrls = {
  [CHAINS.Mainnet]: process.env[`API_PROVIDER_URL_${CHAINS.Mainnet}`],
  [CHAINS.Ropsten]: process.env[`API_PROVIDER_URL_${CHAINS.Ropsten}`],
  [CHAINS.Rinkeby]: process.env[`API_PROVIDER_URL_${CHAINS.Rinkeby}`],
  [CHAINS.Goerli]: process.env[`API_PROVIDER_URL_${CHAINS.Goerli}`],
  [CHAINS.Kovan]: process.env[`API_PROVIDER_URL_${CHAINS.Kovan}`],
};

// rate limit
const rateLimit = process.env.RATE_LIMIT;
const rateLimitTimeFrame = process.env.RATE_LIMIT_TIME_FRAME;

const cspTrustedHosts = process.env.CSP_TRUSTED_HOSTS;
const cspReportOnly = process.env.CSP_REPORT_ONLY;
const cspReportUri = process.env.CSP_REPORT_URI;
const walletconnectProjectId = process.env.WALLETCONNECT_PROJECT_ID

const allowedRpcMethods = [
  'eth_call',
  'eth_gasPrice',
  'eth_requestAccounts',
  'eth_getBalance',
  'eth_getBlockByNumber',
  'eth_estimateGas',
  // PAY ATTENTION: Extra RPC methods can be added here
];

export default {
  basePath,
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    styledComponents: true,
  },
  // WARNING: Vulnerability fix, don't remove until default Next.js image loader is patched
  images: {
    loader: 'custom',
  },
  webpack(config) {
    // Fix: Module not found: Can't resolve 'fs'...
    config.resolve.fallback = { fs: false };

    return config;
  },
  async headers() {
    return [
      {
        // required for gnosis save apps
        source: '/manifest.json',
        headers: [{ key: 'Access-Control-Allow-Origin', value: '*' }],
      },
    ];
  },
  publicRuntimeConfig : {
    walletconnectProjectId,
  },
  serverRuntimeConfig: {
    basePath,
    infuraApiKey,
    alchemyApiKey,
    apiProviderUrls,
    rateLimit,
    rateLimitTimeFrame,
    cspTrustedHosts,
    cspReportOnly,
    cspReportUri,
    allowedRpcMethods,
  },
};
