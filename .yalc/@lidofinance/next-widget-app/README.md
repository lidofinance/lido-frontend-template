# @lidofinance/next-widget-app

Widget app wrapper for any widgets based on Next

### Installation
```bash
yarn add @lidofinance/next-staking-widget-app

# and react 17
yarn add react@^17.0.0

# or react 18
yarn add react@^18.0.0

# and next
yarn add next@^12.3.0 @lidofinance/lido-ui@^3.2.0 @reef-knot/web3-react@^0.3.0
```

### Custom error page in Next.js

Use in `pages/_app.tsx` like here:

```tsx
import { PropsWithChildren } from 'react';
import NextApp, { AppProps } from 'next/app';
import { Stake as StakeLogo } from '@lidofinance/lido-ui';
import {
  WidgetApp,
  INavigationLink,
} from '@lidofinance/next-staking-widget-app';

import { dynamics, walletsMetrics } from 'config';
import { backendRPC } from 'consts';

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
const WidgetAppWrapper = ({
    ...props
}: PropsWithChildren<AppProps>): JSX.Element => (
  <WidgetApp
    pages={headerPages}
    web3={{
      defaultChainId: dynamics.defaultChain, // 1
      supportedChainIds: dynamics.supportedChains, // [1, 4, 5]
      // More info about `rpc` on https://github.com/lidofinance/reef-knot/blob/main/packages/web3-react/src/context/connectors.tsx#L15
      // or here: backendRPC is something like - {
      //    1: '/api/rpc?chainId=1',
      //    4: '/api/rpc?chainId=4',
      //    5: '/api/rpc?chainId=5',
      // }
      rpc: backendRPC,
    }}
    reefKnot={{
      // More info about `walletsMetrics` and `hiddenWallets`
      // on https://github.com/lidofinance/reef-knot
      walletsMetrics: walletsMetrics,
      hiddenWallets: ['Opera Wallet'],
    }}
  >
    <NextApp {...props} />
  </WidgetApp>
);

export default WidgetAppWrapper;
```
