# MIGRATION GUIDE

Current Lido CI setup is built with this app template in mind. If your project was built with custom code / fork of an older version of the staking widget, most likely there would be changes required to make your app run smoothly.

### Step 1. Change all public environment variables to server-side

If you are using any public environment variables, i.e. those with the `NEXT_PUBLIC_` prefix, you will have to change them to regular server-side variables by removing the prefix, e.g.

```bash
# .env.local

# before
NEXT_PUBLIC_MY_PUBLIC_VAR=hello
# after
MY_PUBLIC_VAR=hello
```

### Step 2. Add `DEFAULT_CHAIN` and `SUPPORTED_CHAINS` environment variables

The chains supported by an app's deployment are specified with `DEFAULT_CHAIN` and `SUPPORTED_CHAINS` env variables. Having separate values for mainnet and testnet prevents an entire category of bugs and user wallet-related errors. `DEFAULT_CHAIN` tells the application which network to connect to before the user connects their wallet. `SUPPORTED_CHAINS` are the networks to which wallet connections are limited.

For development we could use several networks

```bash
# .env.local

DEFAULT_CHAIN=4
SUPPORTED_CHAINS=4,5
```

For production it is strongly recommended to limit connections to mainnet only

```bash
# .env.local

DEFAULT_CHAIN=1
SUPPORTED_CHAINS=1
```

### Step 3. Export variables in `next.config.js`

Now we need to change `next.config.js` so that we can use the variables in our application. We will export the private variables with the `serverRuntimeConfig` and those variables that are essential for client-side JavaScript are specified in `publicRuntimeConfig`, e.g.

```js
// next.config.js
const mySecretApiKey = process.env.MY_SECRET_API_KEY;
const defaultChain = process.env.DEFAULT_CHAIN;
const supportedChains = process.env.SUPPORTED_CHAINS;

module.exports = {
  // ...
  serverRuntimeConfig: {
    mySecretApiKey,
  },
  publicRuntimeConfig: {
    defaultChain,
    supportedChains,
  },
};
```

### Step 4. Replace your Web3 Provider with provider from `@lido-sdk/web3-react`

In this step we wrap the application with `ProviderWeb3` from `@lido-sdk/web3-react` and pass our config into it:

- `defaultChainId`,
- `supportedChainIds`,
- and list of `rpc` addresses.

```jsx
// providers/web3.js

import { FC, useMemo } from 'react';
import { ProviderWeb3 } from '@lido-sdk/web3-react';
import { backendRPC } from 'config';

export type EnvConfig = {
  defaultChain: string,
  supportedChains: string,
};

export type Config = {
  defaultChain: number,
  supportedChainIds: number[],
};

export type Web3ProviderProps = { config: EnvConfig };

const Web3Provider: FC<Web3ProviderProps> = ({ children, config }) => {
  const defaultChainId = parseInt(config.defaultChain);

  const supportedChainIds = useMemo(() => {
    return config.supportedChains
      .split(',')
      .map((value: string) => parseInt(value));
  }, [config.supportedChains]);

  return (
    <ProviderWeb3
      defaultChainId={defaultChainId}
      supportedChainIds={supportedChainIds}
      rpc={backendRPC}
    >
      {children}
    </ProviderWeb3>
  );
};

export default Web3Provider;
```

This provider is required for hooks from `@lido-sdk/web3-react` and `@lido-sdk/react`.
For more details visit the [Lido JS SDK repository](https://github.com/lidofinance/lido-js-sdk/)

### Step 5. Wrap your app with `Web3Provider`

Now go to `_app.js` and wrap your entire application with the Web3Provider from previous step, e.g.

```js
// pages/_app.js

import Web3Provider from 'providers/web3';

const App = (props) => {
  const { Component, pageProps } = props;
  return <Component {...pageProps} />;
};

// memoize app to eliminate unnecessary re-renders
const MemoApp = memo(App);

const AppWrapper = (props) => {
  // this config will be passed down in the next step
  const { config, ...rest } = props;

  return (
    // provide empty object for fallback
    <Web3Provider config={config || {}}>
      <MemoApp {...rest} />
    </Web3Provider>
  );
};
```

### Step 6. Export server-side variables to the client using `getInitialProps`

Add the `getInitialProps` method to your application (`_app.js`) and pass down the `publicRuntimeConfig` to the React context here, e.g.

```js
// pages/_app.js
import NextApp from 'next/app';
import getConfig from 'next/config';

AppWrapper.getInitialProps = async (appContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  const { publicRuntimeConfig } = getConfig();

  return { ...appProps, config: publicRuntimeConfig };
};

export default AppWrapper;
```

### Step 7. Add the `getServerSideProps` method on each page

For the initial page load, `getInitialProps` will run on the server only. `getInitialProps` will then run on the client when navigating to a different route via the `next/link` component or by using `next/router`. However, exporting `getServerSideProps` on each page of our app forces Next to always run `getInitialProps` on the server, e.g.

```js
// pages/index.js

const IndexPage = () => {
  return <h1>Hello!</h1>;
};

export default IndexPage;

IndexPage.getServerSideProps = async () => {
  // doesn't have to return anything
  return {
    props: {},
  };
};
```

### Step 8. Replace existing hooks with hooks from SDK

Popular hooks have been moved to the shared library. Check out this packages:
https://github.com/lidofinance/lido-js-sdk/tree/main/packages/react
https://github.com/lidofinance/lido-js-sdk/tree/main/packages/web3-react

### Step 9. Turn functions into hooks

Unfortunately, you cannot use the `useSDK` hook in regular JavaScript functions, this is why you will have to re-write those into hooks. As an example, we will consider an utility function that builds an Etherscan link based on the current network and tx hash.

#### BEFORE

We would have a helper like this,

```js
// utils/getEtherscanLink.js
const ETHERSCAN_SUBDOMAINS_BY_NETWORK = {
  [1]: '',
  [3]: 'ropsten.',
  [4]: 'rinkeby.',
  [5]: 'goerli.',
  [42]: 'kovan.',
};

export default getEtherscanLink(chain, hash) {
  return `https://${ETHERSCAN_SUBDOMAINS_BY_NETWORK(chain)}/tx/${hash}`
}
```

and we would use it like so,

```js
import { ACTIVE_CHAIN } from 'config';
import getEtherscanLink from 'utils/getEtherscanLink';

const Transaction = ({ hash }) => {
  return (
    <div>
      <a href={getEtherscanLink(ACTIVE_CHAIN, hash)}>Go to Etherscan</a>
    </div>
  );
};
```

#### AFTER

Now we will re-write our helper into a hook,

```jsx
import useChain from 'hooks/useChain';

const ETHERSCAN_SUBDOMAINS_BY_NETWORK = {
  [1]: '',
  [3]: 'ropsten.',
  [4]: 'rinkeby.',
  [5]: 'goerli.',
  [42]: 'kovan.',
};

const useEtherscanLink = (hash) => {
  const chain = useChain();

  return `https://${ETHERSCAN_SUBDOMAINS_BY_NETWORK(chain)}/tx/${hash}`;
};
```

And now use the hook like so,

```js
import useEtherscanLink from 'hooks/useEtherscanLink';

const Transaction = ({ hash }) => {
  const etherscanLink = useEtherscanLink(hash);

  return (
    <div>
      <a href={etherscanLink}>Go to Etherscan</a>
    </div>
  );
};
```

### Step 10. Using private variables

Private variables are accessed directly by the Next server-side code with `getConfig` function.

```js
// pages/index.js
import getConfig from 'next/config';

const IndexPage = ({ dataFromApi }) => {
  return <p>{dataFromApi}</p>;
};

IndexPage.getServerSideProps = async () => {
  const { serverRuntimeConfig } = getConfig();

  // this is the variable that we've exported in next.config.js
  const { mySecretApiKey } = serverRuntimeConfig;

  const response = await fetch(`https://someapi.com?apiKey=${mySecretApiKey}`);
  const data = await response.json();

  return {
    props: {
      dataFromApi: data,
    },
  };
};
```
