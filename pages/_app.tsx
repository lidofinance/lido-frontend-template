import { FC } from 'react';
import NextApp, { AppProps } from 'next/app';
import { ProviderWeb3 } from '@reef-knot/web3-react';
import { ProviderWalletModal } from '@lidofinance/eth-ui-wallet-modal';
import {
  Stake,
  Ldo as LdoIcon,
  Wrap,
  migrationAllowCookieToCrossDomainCookieClientSide,
} from '@lidofinance/lido-ui';
import { WidgetApp, INavigationLink } from '@lidofinance/next-widget-app';

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

// App wrapper
const WidgetAppWrapper: FC<AppProps> = ({ ...props }) => (
  <ProviderWeb3
    defaultChainId={dynamics.defaultChain}
    supportedChainIds={dynamics.supportedChains}
    rpc={backendRPC}
  >
    <ProviderWalletModal
      walletsMetrics={walletsMetrics}
      hiddenWallets={['Opera Wallet']}
    >
      <WidgetApp
        navigation={headerNavigation}
        headerActions={<HeaderActions />}
      >
        <NextApp {...props} />
      </WidgetApp>
    </ProviderWalletModal>
  </ProviderWeb3>
);

export default process.env.NODE_ENV === 'development'
  ? WidgetAppWrapper
  : withCsp(WidgetAppWrapper);
