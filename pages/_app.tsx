import { PropsWithChildren } from 'react';
import NextApp, { AppProps } from 'next/app';
import {
  Stake,
  Ldo as LdoIcon,
  Wrap,
  migrationAllowCookieToCrossDomainCookieClientSide,
} from '@lidofinance/lido-ui';
import {
  WidgetApp,
  INavigationLink,
} from '@lidofinance/next-staking-widget-app';

import { dynamics, walletsMetrics } from 'config';
import { backendRPC } from 'consts';
import { withCsp } from 'utils';

// Migrations old allow cookies to new cross domain cookies
// It is here 'cause `keyOldCookies` may be different for widgets
migrationAllowCookieToCrossDomainCookieClientSide(
  'LIDO_WIDGET__COOKIES_ALLOWED',
);

// Header pages
const headerPages = [
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
    external: true,
  },
] as INavigationLink[];

// App wrapper
const WidgetAppWrapper = ({
  ...props
}: PropsWithChildren<AppProps>): JSX.Element => (
  <WidgetApp
    pages={headerPages}
    web3={{
      defaultChainId: dynamics.defaultChain,
      supportedChainIds: dynamics.supportedChains,
      rpc: backendRPC,
    }}
    reefKnot={{
      walletsMetrics: walletsMetrics,
      hiddenWallets: ['Opera Wallet'],
    }}
  >
    <NextApp {...props} />
  </WidgetApp>
);

export default process.env.NODE_ENV === 'development'
  ? WidgetAppWrapper
  : withCsp(WidgetAppWrapper);
