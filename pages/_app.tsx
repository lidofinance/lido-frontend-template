import { FC, PropsWithChildren } from 'react';
import NextApp, { AppProps } from 'next/app';
import { ProviderWeb3, useWeb3 } from '@reef-knot/web3-react';
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
import { HeaderWalletActionsLeftSlot } from 'components/headerWalletActionsLeftSlot';
import { withCsp } from 'utils';

// Migrations old allow cookies to new cross domain cookies
// It is here 'cause `keyOldCookies` may be different for widgets
// One day it will be deprecated
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

// PAY ATTENTION: Providers will be inserted in CookieThemeProvider before layout components
const Providers: FC<PropsWithChildren> = ({ children }) => (
  <ProviderWalletModal
    walletsMetrics={walletsMetrics}
    hiddenWallets={['Opera Wallet']}
  >
    {children}
  </ProviderWalletModal>
);

// App wrapper
const WidgetAppWrapper: FC<AppProps> = ({ ...props }) => {
  const { active } = useWeb3();

  return (
    // PAY ATTENTION: You can put here some providers, if they don't depend on CookieThemeProvider:
    // <SomeProvider>
    <ProviderWeb3
      defaultChainId={dynamics.defaultChain}
      supportedChainIds={dynamics.supportedChains}
      rpc={backendRPC}
    >
      <WidgetApp
        navigation={headerPages}
        connectedWalletInfoButton={<WalletButton />}
        walletConnectButton={<WalletConnectButton size="sm" />}
        walletActionsLeftSlot={<HeaderWalletActionsLeftSlot />}
        walletIsActive={active}
        providers={Providers}
      >
        <NextApp {...props} />
      </WidgetApp>
    </ProviderWeb3>
    // </SomeProvider>
  );
};

export default process.env.NODE_ENV === 'development'
  ? WidgetAppWrapper
  : withCsp(WidgetAppWrapper);
