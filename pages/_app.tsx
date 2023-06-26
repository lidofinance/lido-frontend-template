import { FC } from 'react';
import NextApp, { AppProps } from 'next/app';
import getConfig from 'next/config';
// import { ProviderWeb3 } from 'reef-knot/web3-react'

// import { ProviderWalletModal } from '@lidofinance/eth-ui-wallet-modal';
import {
  Stake,
  Ldo as LdoIcon,
  Wrap,
  migrationAllowCookieToCrossDomainCookieClientSide,
} from '@lidofinance/lido-ui';
// import { WidgetApp } from '@lidofinance/next-widget-app';
import { WidgetAppEVM } from '@lidofinance/next-widget-app';
import { NavigationLinkProps } from '@lidofinance/next-widget-layout';

import {
  getBackendRPCPath,
  backendRPC,
  dynamics,
  walletsMetrics,
} from 'config';
import { HeaderActions } from 'components/headerActions';
// import { AppWagmiConfig } from 'components/wagmi';
import NoSSRWrapper from 'components/no-ssr-wrapper';
import { withCsp } from 'utils';

// TODO: dynamics
const { publicRuntimeConfig } = getConfig();

// Migrations old allow cookies to new cross domain cookies
// It is here 'cause `keyOldCookies` may be different for widgets
// One day it will be deprecated
migrationAllowCookieToCrossDomainCookieClientSide(
  'LIDO_WIDGET__COOKIES_ALLOWED',
);

// Header pages
const headerNavigation: NavigationLinkProps[] = [
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

// App wrapper
const WidgetAppWrapper: FC<AppProps> = ({ ...props }) => (
  // Temporary fix hydration error
  <NoSSRWrapper>
    <WidgetAppEVM
      navigation={headerNavigation}
      headerActions={<HeaderActions />}
      reefKnot={{
        walletsMetrics: walletsMetrics,
        hiddenWallets: ['Opera Wallet'],
      }}
      providerWeb3={{
        defaultChainId: dynamics.defaultChain,
        supportedChainIds: dynamics.supportedChains,
        rpc: backendRPC,
        walletconnectProjectId: publicRuntimeConfig.walletconnectProjectId,
      }}
      wagmi={{
        defaultChain: dynamics.defaultChain,
        supportedChains: dynamics.supportedChains,
        backendRPC: backendRPC,
        getBackendRPCPath: getBackendRPCPath,
        walletconnectProjectId: publicRuntimeConfig.walletconnectProjectId,
      }}
    >
      <NextApp {...props} />
    </WidgetAppEVM>
  </NoSSRWrapper>
);

// App wrapper
// const WidgetAppWrapper: FC<AppProps> = ({ ...props }) => (
//   <AppWagmiConfig>
//     {/* @ts-expect-error ProviderWeb3 accepts children, but some problem with type */}
//     <ProviderWeb3
//       defaultChainId={dynamics.defaultChain}
//       supportedChainIds={dynamics.supportedChains}
//       rpc={backendRPC}
//       walletconnectProjectId={publicRuntimeConfig.walletconnectProjectId}
//     >
//       {/* Temporary fix hydration error */}
//       <NoSSRWrapper>
//         <ProviderWalletModal
//           walletsMetrics={walletsMetrics}
//           hiddenWallets={['Opera Wallet']}
//         >
//           <WidgetApp
//             navigation={headerNavigation}
//             headerActions={<HeaderActions />}
//           >
//             <NextApp {...props} />
//           </WidgetApp>
//         </ProviderWalletModal>
//       </NoSSRWrapper>
//     </ProviderWeb3>
//   </AppWagmiConfig>
// );

export default process.env.NODE_ENV === 'development'
  ? WidgetAppWrapper
  : withCsp(WidgetAppWrapper);
