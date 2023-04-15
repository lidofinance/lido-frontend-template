# @lidofinance/next-pages

Common next pages.

## Installation

`yarn add @lidofinance/next-pages`.

## Getting started

### health

```ts
import { health } from '@lidofinance/next-pages';

export default health;
```

### metrics

```ts
import { registry } from 'utilsApi/metrics';
import { metricsFactory } from '@lidofinance/next-pages';

const metrics = metricsFactory({
  registry,
});

export default metrics;
```

### rpc

```ts
import getConfig from 'next/config';
import { registry } from 'utilsApi/metrics';
import { rpcFactory } from '@lidofinance/api-pages';
import { METRICS_PREFIX } from '../../config';
import { fetchRPC, serverLogger } from 'utilsApi';

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
  serverLogger,
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