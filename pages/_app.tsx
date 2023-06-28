import { FC } from 'react';
import NextApp, { AppProps } from 'next/app';

import {
  Stake,
  Ldo as LdoIcon,
  Wrap,
  migrationAllowCookieToCrossDomainCookieClientSide,
} from '@lidofinance/lido-ui';
import { EVMWidgetApp } from '@lidofinance/next-widget-app';
import { NavigationLinkProps } from '@lidofinance/next-widget-layout';

import {
  getBackendRPCPath,
  backendRPC,
  dynamics,
  walletsMetrics,
} from 'config';
import { HeaderActions } from 'components/headerActions';
import { GlobalStyles } from 'components/globalStyle';
import NoSSRWrapper from 'components/no-ssr-wrapper';
import { withCsp } from 'utils';

// Migrations old allow cookies to new cross domain cookies
// It is here 'cause `keyOldCookies` may be different for widgets
// One day it will be deprecated
migrationAllowCookieToCrossDomainCookieClientSide(
  'LIDO_WIDGET__COOKIES_ALLOWED',
);

// Header pages
const navigationLinks: NavigationLinkProps[] = [
  {
    title: 'Stake',
    href: '/',
    icon: <Stake />,
  },
  {
    title: 'Example',
    href: '/example',
    icon: <Wrap />,
  },
  {
    title: 'Landing',
    href: 'https://lido.fi/',
    icon: <LdoIcon />,
  },
];

// App use EVM wrapper
const WidgetAppWrapper: FC<AppProps> = (props) => (
  // Temporary fix hydration error
  // TODO
  <NoSSRWrapper>
    <EVMWidgetApp
      navigationLinks={navigationLinks}
      headerActions={<HeaderActions />}
      reefKnot={{
        walletsMetrics: walletsMetrics,
        hiddenWallets: ['Opera Wallet'],
      }}
      providerWeb3={{
        defaultChainId: dynamics.defaultChain,
        supportedChainIds: dynamics.supportedChains,
        rpc: backendRPC,
        walletconnectProjectId: dynamics.walletconnectProjectId,
      }}
      wagmi={{
        defaultChain: dynamics.defaultChain,
        supportedChains: dynamics.supportedChains,
        backendRPC: backendRPC,
        getBackendRPCPath: getBackendRPCPath,
        walletconnectProjectId: dynamics.walletconnectProjectId,
      }}
    >
      <GlobalStyles />
      <NextApp {...props} />
    </EVMWidgetApp>
  </NoSSRWrapper>
);

export default process.env.NODE_ENV === 'development'
  ? WidgetAppWrapper
  : withCsp(WidgetAppWrapper);
