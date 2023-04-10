# @lidofinance/next-widget-app

Widget app wrapper for any widgets based on Next.

This component abstracted from the blockchain network,
other words you can use it for any widgets for any blockchains.

### Installation
```bash
yarn add @lidofinance/next-widget-app

# and react 17
yarn add react@^17.0.0

# or react 18
yarn add react@^18.0.0

# and additional
yarn add next@^12.3.0 styled-components@^5.3.5 @lidofinance/lido-ui@^3.6.1 @lidofinance/ui-primitives@^<TODO>
```

### Custom error page in Next.js

Use in `pages/_app.tsx` like here:

```tsx
import { FC } from 'react';
import NextApp, { AppProps } from 'next/app';
import { ProviderWeb3 } from '@reef-knot/web3-react';
import { ProviderWalletModal } from '@lidofinance/eth-ui-wallet-modal';
import { Stake as StakeLogo } from '@lidofinance/lido-ui';
import { WidgetApp, INavigationLink } from '@lidofinance/next-widget-app';

import { backendRPC, dynamics, walletsMetrics } from 'config';
// To `HeaderActions` need to pass FC, which contain `connect wallet` button and `show connect wallet info` button
// Example you can see on https://github.com/lidofinance/lido-frontend-template
import { HeaderActions } from 'components/headerActions';
import { withCsp } from 'utils';

// Header links
const headerPages = [
  {
    title: 'Internal link',
    href: '/',
    icon: <StakeLogo />,
  },
  {
    title: 'External link',
    href: 'https://lido.fi/',
    icon: <StakeLogo />,
    external: true,
  },
] as INavigationLink[];

// App wrapper
const WidgetAppWrapper: FC<AppProps> = ({ ...props }) => (
  <ProviderWeb3
    defaultChainId={dynamics.defaultChain} // 1
    supportedChainIds={dynamics.supportedChains} // [1, 4, 5]
    // More info about `rpc` on https://github.com/lidofinance/reef-knot/blob/main/packages/web3-react/src/context/connectors.tsx#L15
    // or here: backendRPC is something like - {
    //    1: '/api/rpc?chainId=1',
    //    4: '/api/rpc?chainId=4',
    //    5: '/api/rpc?chainId=5',
    // }
    rpc={backendRPC}
  >
    <ProviderWalletModal
      // More info about `walletsMetrics` and `hiddenWallets`
      // on https://github.com/lidofinance/reef-knot
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
```
