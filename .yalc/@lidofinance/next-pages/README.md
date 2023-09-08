# @lidofinance/next-pages

Common API and UI next pages.

## Installation

* React 17 || 18

```bash
yarn add @lidofinance/next-pages

# and additional
yarn add next@^12.3.0 prom-client@^14.0.0 @lidofinance/lido-ui@^3.6.1
```

## Getting started

### API pages

#### Health

```ts
import { health } from '@lidofinance/next-pages';
// or import { health } from '@lidofinance/next-pages/api';

export default health;
```

#### Metrics

```ts
import { registry } from 'utilsApi/metrics';
import { metricsFactory } from '@lidofinance/next-pages';
// or import { metricsFactory } from '@lidofinance/next-pages/api';

const metrics = metricsFactory({
  registry,
});

export default metrics;
```

#### RPC

```ts
import getConfig from 'next/config';
import { rpcFactory } from '@lidofinance/api-pages';
// or import { rpcFactory } from '@lidofinance/next-pages/api';
import { fetchRPC, serverLogger } from 'utilsApi';
import { registry } from 'utilsApi/metrics';
import { METRICS_PREFIX } from '../../config';

const { publicRuntimeConfig, serverRuntimeConfig } = getConfig();
const { defaultChain } = publicRuntimeConfig;
const { infuraApiKey, alchemyApiKey } = serverRuntimeConfig;

// Should be a separate file
export const enum CHAINS {
  Mainnet = 1,
  Goerli = 5,
}

// Should be a separate file 
export const providers: Record<CHAINS, [string, ...string[]]> = {
  [CHAINS.Mainnet]: [
    `https://mainnet.infura.io/v3/${infuraApiKey}`,
    `https://eth-mainnet.alchemyapi.io/v2/${alchemyApiKey}`,
  ],
  [CHAINS.Goerli]: [
    `https://goerli.infura.io/v3/${infuraApiKey}`,
    `https://eth-goerli.alchemyapi.io/v2/${alchemyApiKey}`,
  ],
};

const rpc = rpcFactory({
  fetchRPC,
  metrics: {
    prefix: METRICS_PREFIX,
    registry,
  },
  allowedRPCMethods: [
    'eth_call',
    'eth_gasPrice',
    // ...
  ],
  defaultChain,
  providers,
});

export default rpc;
```

### UI pages

#### Page Error (ready implementations)

- **Page404**
- **Page500**

Example for `pages/404.tsx`
```tsx
import { Page404 } from '@lidofinance/next-ui-pages/ui';

export default Page404;
```

Example for `pages/500.tsx`
```tsx
import { Page500 } from '@lidofinance/next-ui-pages/ui';

export default Page500;
```

#### Error page as generic component

Example for `pages/404.tsx`

```tsx
import { FC } from 'react';
import { PageError } from '@lidofinance/next-ui-pages/ui';

const Page404: FC = () => <PageError title="404" content="Page Not Found" />;

export default Page404;
```
