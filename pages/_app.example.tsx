import { FC } from 'react';
import NextApp, { AppProps } from 'next/app';
import { ProviderWeb3 } from 'reef-knot/web3-react';

import { ProviderWalletModal } from '@lidofinance/eth-ui-wallet-modal';
import { Stake } from '@lidofinance/lido-ui';
import { WidgetApp } from '@lidofinance/next-widget-app';
import { NavigationLinkProps } from '@lidofinance/next-widget-layout';

import { backendRPC, dynamics, walletsMetrics } from 'config';
import { HeaderActions } from 'components/headerActions';
import { GlobalStyles } from 'components/globalStyle';
import { AppWagmiConfig } from 'components/wagmi';
import NoSSRWrapper from 'components/no-ssr-wrapper';

// Header pages
const navigationLinks: NavigationLinkProps[] = [
  {
    title: 'Stake',
    href: '/',
    icon: <Stake />,
  },
];

// App use not EVM wrapper.
// In general, this is also an example for ETH, however, this structure can be used for any blockchain.
const WidgetAppWrapper: FC<AppProps> = (props) => (
  <AppWagmiConfig>
    {/* @ts-expect-error ProviderWeb3 accepts children, but some problem with type */}
    <ProviderWeb3
      defaultChainId={dynamics.defaultChain}
      supportedChainIds={dynamics.supportedChains}
      rpc={backendRPC}
      walletconnectProjectId={dynamics.walletconnectProjectId}
    >
      {/* Temporary fix hydration error */}
      {/* TODO */}
      <NoSSRWrapper>
        <ProviderWalletModal
          walletsMetrics={walletsMetrics}
          hiddenWallets={['Opera Wallet']}
        >
          <WidgetApp
            navigationLinks={navigationLinks}
            headerActions={<HeaderActions />}
          >
            <GlobalStyles />
            <NextApp {...props} />
          </WidgetApp>
        </ProviderWalletModal>
      </NoSSRWrapper>
    </ProviderWeb3>
  </AppWagmiConfig>
);

export default WidgetAppWrapper;
