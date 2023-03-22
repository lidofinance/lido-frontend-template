import { FC } from 'react';
import { AppProps } from 'next/app';
import { withSecureHeaders } from 'next-secure-headers';
import { serverRuntimeConfig } from 'config';

const { cspTrustedHosts, cspReportOnly, cspReportUri } = serverRuntimeConfig;

// PAY ATTENTION: Extra Content Security Policy can be added here

// TODO: move a settings to next.config (need more research!)
const trustedHosts = cspTrustedHosts
  ? cspTrustedHosts.split(',')
  : ['https://*.lido.fi'];

const reportOnly = cspReportOnly === 'true';

export const contentSecurityPolicy = {
  directives: {
    styleSrc: ["'self'", 'https://fonts.googleapis.com', "'unsafe-inline'"],
    fontSrc: ["'self'", 'https://fonts.gstatic.com', ...trustedHosts],
    imgSrc: ["'self'", 'data:', ...trustedHosts],
    scriptSrc: ["'self'", "'unsafe-eval'", "'unsafe-inline'", ...trustedHosts],
    connectSrc: [
      "'self'",
      'wss://*.walletconnect.org',
      'https://*.walletconnect.org',
      ...trustedHosts,
    ],
    prefetchSrc: ["'self'", ...trustedHosts],
    formAction: ["'self'", ...trustedHosts],
    frameAncestors: ['*'],
    manifestSrc: ["'self'", ...trustedHosts],
    mediaSrc: ["'self'", ...trustedHosts],
    childSrc: ["'self'", ...trustedHosts],
    objectSrc: ["'self'", ...trustedHosts],
    defaultSrc: ["'self'", ...trustedHosts],
    baseUri: ["'none'"],
    reportURI: cspReportUri,
  },
  reportOnly,
};

export const withCsp = (app: FC<AppProps>): FC =>
  withSecureHeaders({
    contentSecurityPolicy,
    frameGuard: false,
  })(app);
