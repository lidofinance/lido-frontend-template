const { createSecureHeaders } = require('next-secure-headers');

const { CHAINS } = require('@lido-sdk/constants');

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

const defaultChain = process.env.DEFAULT_CHAIN;
const supportedChains = process.env.SUPPORTED_CHAINS;

let cspTrustedHosts = process.env.CSP_TRUSTED_HOSTS || 'https://*.lido.fi';
const cspReportOnly = process.env.CSP_REPORT_ONLY === 'true';
const cspReportUri = process.env.CSP_REPORT_URI;

module.exports = {
  basePath,
  future: {
    webpack5: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    return config;
  },
  async headers() {
    return [
      {
        // required for gnosis save apps
        source: '/manifest.json',
        headers: [{ key: 'Access-Control-Allow-Origin', value: '*' }],
      },
      {
        source: '/(.*)',
        headers: createSecureHeaders({
          contentSecurityPolicy: {
            directives: {
              styleSrc: ["'self'", "'unsafe-inline'"],
              fontSrc: [
                "'self'",
                'https://fonts.gstatic.com',
                ...cspTrustedHosts,
              ],
              imgSrc: ["'self'", 'data:', ...cspTrustedHosts],
              scriptSrc: ["'self'", ...cspTrustedHosts],
              connectSrc: ["'self'", ...cspTrustedHosts],
              defaultSrc: ["'self'", ...cspTrustedHosts],
              reportURI: cspReportUri,
            },
          },
          reportOnly: cspReportOnly,
        }),
      },
    ];
  },
  serverRuntimeConfig: {
    basePath,
    infuraApiKey,
    alchemyApiKey,
    apiProviderUrls,
  },
  publicRuntimeConfig: {
    defaultChain,
    supportedChains,
  },
};
