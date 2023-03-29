import { FC, PropsWithChildren } from 'react';
import NextApp, { AppProps } from 'next/app';
import { ProviderWeb3 } from '@reef-knot/web3-react';
import {
  ProviderWalletModal,
  WalletButton,
  WalletConnectButton,
} from '@lidofinance/eth-ui-wallet-modal';
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
import { withCsp } from 'utils';

// Migrations old allow cookies to new cross domain cookies
// It is here 'cause `keyOldCookies` may be different for widgets
migrationAllowCookieToCrossDomainCookieClientSide(
  'LIDO_WIDGET__COOKIES_ALLOWED',
);

// Header pages
const headerPages: INavigationLink[] = [
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
  <WidgetApp
    navigation={headerPages}
    connectedWalletInfoButton={<WalletButton />}
    walletConnectButton={<WalletConnectButton size="sm" />}
    providers={Providers}
  >
    <NextApp {...props} />
  </WidgetApp>
);

export default process.env.NODE_ENV === 'development'
  ? WidgetAppWrapper
  : withCsp(WidgetAppWrapper);
