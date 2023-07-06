# @lidofinance/eth-next-widget-app-evm

Widget app wrapper (`pages/_app.tsx`) for any blockchains widgets based on Next.

### Installation

* React 17 || 18
* Next 12 || 13

```bash
yarn add @lidofinance/eth-next-widget-app-evm

# and additional
yarn add styled-components@^5.3.5 reef-knot@^1.3.2 wagmi@0.12.15
yarn add @lido-sdk/constants@^3.1.0 @lidofinance/lido-ui@^^3.8.0 @lidofinance/next-ui-primitives@^0.30.0
yarn add @lidofinance/eth-ui-wallet-modal@^0.30.0 @lidofinance/next-widget-layout@^0.30.0
```

## Getting started

Use in `pages/_app.tsx` like here:

### EVM widget

#### Use EVM wrapper

```tsx
import { FC } from 'react';
import NextApp, { AppProps } from 'next/app';

import { Stake, Withdrawals } from '@lidofinance/lido-ui';
import { EVMWidgetApp } from '@lidofinance/next-widget-app';
import { NavigationAdaptive, NavigationLink } from '@lidofinance/next-widget-layout';

import {
  getBackendRPCPath,
  backendRPC,
  dynamics,
  walletsMetrics,
} from 'config';
import { HeaderActions } from 'components/headerActions';
import { GlobalStyles } from 'components/globalStyle';

const Navigation: FC = () => (
  <NavigationAdaptive>
    <NavigationLink title="Stake" href={'/'} icon={<Stake />} />
    <NavigationLink title='Withdrawals' href='/withdrawals' icon={<Withdraw />} />
  </NavigationAdaptive>
);

// App use EVM wrapper
export const WidgetAppWrapper: FC<AppProps> = (props) => (
  <EVMWidgetApp
    navigation={<Navigation />}
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
);
```

#### Not use EVM wrapper

```tsx
import { FC } from 'react';
import NextApp, { AppProps } from 'next/app';
import { ProviderWeb3 } from 'reef-knot/web3-react';

import { ProviderWalletModal } from '@lidofinance/eth-ui-wallet-modal';
import { Stake, Withdrawals } from '@lidofinance/lido-ui';
import { WidgetApp } from '@lidofinance/next-widget-app';
import { NavigationAdaptive, NavigationLink } from '@lidofinance/next-widget-layout';

import { backendRPC, dynamics, walletsMetrics } from 'config';
import { HeaderActions } from 'components/headerActions';
import { GlobalStyles } from 'components/globalStyle';
import { AppWagmiConfig } from 'components/wagmi';

const Navigation: FC = () => (
  <NavigationAdaptive>
    <NavigationLink title="Stake" href={'/'} icon={<Stake />} />
    <NavigationLink title='Withdrawals' href='/withdrawals' icon={<Withdraw />} />
  </NavigationAdaptive>
);

export const WidgetAppWrapper: FC<AppProps> = (props) => (
  <AppWagmiConfig>
    {/* @ts-expect-error ProviderWeb3 accepts children, but some problem with type */}
    <ProviderWeb3
      defaultChainId={dynamics.defaultChain}
      supportedChainIds={dynamics.supportedChains}
      rpc={backendRPC}
      walletconnectProjectId={dynamics.walletconnectProjectId}
    >
      <ProviderWalletModal
        walletsMetrics={walletsMetrics}
        hiddenWallets={['Opera Wallet']}
      >
        <WidgetApp
          navigation={<Navigation />}
          headerActions={<HeaderActions />}
        >
          <GlobalStyles />
          <NextApp {...props} />
        </WidgetApp>
      </ProviderWalletModal>
    </ProviderWeb3>
  </AppWagmiConfig>
);
```
