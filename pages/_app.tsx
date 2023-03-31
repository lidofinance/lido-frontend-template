import { FC, PropsWithChildren } from 'react';
import NextApp, { AppProps } from 'next/app';
import { ProviderWeb3 } from '@reef-knot/web3-react';
import { ProviderWalletModal } from '@lidofinance/eth-ui-wallet-modal';
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

import { backendRPC, dynamics, walletsMetrics } from 'config';
import { HeaderActions } from 'components/headerActions';
import { withCsp } from 'utils';

// Migrations old allow cookies to new cross domain cookies
// It is here 'cause `keyOldCookies` may be different for widgets
// One day it will be deprecated
migrationAllowCookieToCrossDomainCookieClientSide(
  'LIDO_WIDGET__COOKIES_ALLOWED',
);

// Header pages
const headerNavigation: INavigationLink[] = [
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
];

// PAY ATTENTION: Providers will be inserted in CookieThemeProvider before layout components
const Providers: FC<PropsWithChildren> = ({ children }) => (
  <ProviderWeb3
    defaultChainId={dynamics.defaultChain}
    supportedChainIds={dynamics.supportedChains}
    rpc={backendRPC}
  >
    <ProviderWalletModal
      walletsMetrics={walletsMetrics}
      hiddenWallets={['Opera Wallet']}
    >
      {children}
    </ProviderWalletModal>
  </ProviderWeb3>
);

// App wrapper
const WidgetAppWrapper: FC<AppProps> = ({ ...props }) => (
  // PAY ATTENTION: You can put here some providers, if they don't depend on CookieThemeProvider:
  // <SomeProvider>
  <WidgetApp
    navigation={headerNavigation}
    headerActions={<HeaderActions />}
    providers={Providers}
  >
    <NextApp {...props} />
  </WidgetApp>
  // </SomeProvider>
);

export default process.env.NODE_ENV === 'development'
  ? WidgetAppWrapper
  : withCsp(WidgetAppWrapper);
