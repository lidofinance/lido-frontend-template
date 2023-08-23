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

const allowedRpcMethods = [
  'eth_call',
  'eth_gasPrice',
  'eth_requestAccounts',
  'eth_getBalance',
  'eth_getBlockByNumber',
  'eth_estimateGas',
  // PAY ATTENTION: Extra RPC methods can be added here
];

const faqNetlifyUrl = process.env.FAQ_NETLIFY_URL;

export default {
  basePath,
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    styledComponents: true,
  },
  experimental: {
    // Fixes a build error with importing Pure ESM modules, e.g. reef-knot
    // Some docs are here:
    // <https://github.com/vercel/next.js/pull/27069>
    // You can see how it is actually used in v12.3.4 here:
    // <https://github.com/vercel/next.js/blob/v12.3.4/packages/next/build/webpack-config.ts#L417>
    // Presumably, it is true by default in next v13 and won't be needed
    esmExternals: true,
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
    faqNetlifyUrl,
  },
};
