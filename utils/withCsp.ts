import { withSecureHeaders } from 'next-secure-headers';
import getConfig from 'next/config';
import { FC } from 'react';
import { CustomAppProps } from 'types';

const { serverRuntimeConfig } = getConfig();
const { cspTrustedHosts, cspReportOnly, cspReportUri } = serverRuntimeConfig;

const trustedHosts = cspTrustedHosts
  ? cspTrustedHosts.split(',')
  : ['https://*.lido.fi'];

const reportOnly = cspReportOnly === 'true';

export const contentSecurityPolicy = {
  directives: {
    styleSrc: ["'self'", 'https://fonts.googleapis.com', "'unsafe-inline'"],
    fontSrc: ["'self'", 'https://fonts.gstatic.com', ...trustedHosts],
    imgSrc: ["'self'", 'data:', ...trustedHosts],
    scriptSrc: ["'self'", ...trustedHosts],
    connectSrc: ["'self'", ...trustedHosts],
    defaultSrc: ["'self'", ...trustedHosts],
    reportURI: cspReportUri,
  },
  reportOnly: reportOnly,
};

export const withCsp = (
  app: ({ config, ...appProps }: CustomAppProps) => JSX.Element,
): FC =>
  withSecureHeaders({
    contentSecurityPolicy,
  })(app);
