# MIGRATION GUIDE

If you have been using the old Ethereum Lido Staking Widget as your template, your project may be subject to changes as per this new template. In this document you will be presented with a step-by-step guide on how to migrate to the new Lido project structure as necessitated by our pipeline.

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

`DEFAULT_CHAIN` and `SUPPORTED_CHAINS` are important variables that are different for mainnet and testnet deployments which eliminates an entire category of bugs and user wallet-related errors. `DEFAULT_CHAIN` tells the application which network to connect to before the user connects their wallet. `SUPPORTED_CHAINS` are the networks to which wallet connections are limited.

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

### Step 4. Create a React Context for config

In this step we create a React Context that will wrap our entire application, so that we can access the variables anywhere in our component tree without the need to drill them down via props. If our wallet connectors depend on the current network, which they usually do, we would also add them to our config provider, e.g.

```js
// providers/config.js

const ConfigContext = React.createContext({});

const ConfigProvider = ({ config, children }) => {
  // cast the string to int
  const defaultChain = parseInt(config.defaultChain);

  // comma-separated numbers into an array of ints
  const supportedChainIds = useMemo(() => {
    return config.supportedChains
      .split(',')
      .map((value: string) => parseInt(value));
  }, [config.supportedChains]);

  // restrict Metamask connections to specified supported chains
  const metamask = useMemo(
    () => new InjectedConnector({ supportedChainIds }),
    [supportedChainIds],
  );

  // memoize context value
  const contextValue = useMemo(
    () => ({
      config: {
        defaultChain,
        supportedChainIds,
      },
      connectors: {
        metamask,
      },
    }),
    [defaultChain, supportedChains, metamask],
  );

  return (
    <ConfigContext.Provider value={contextValue}>
      {children}
    </ConfigContext.Provider>
  );
};

export default memo(ConfigProvider);
```

### Step 5. Wrap your app with `ConfigProvider`

Now go to `_app.js` and wrap your entire application with the config provider, e.g.

```js
// pages/_app.js

import ConfigProvider from 'providers/config';

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
    <ConfigProvider config={config || {}}>
      <MemoApp {...rest} />
    </ConfigProvider>
  );
};
```

### Step 6. Export server-side variables to the client using `getInitialProps`

Add the `getInitialProps` method to your application, in which your pass down the `publicRuntimeConfig` to the React context, e.g.

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

For the initial page load, `getInitialProps` will run on the server only. `getInitialProps` will then run on the client when navigating to a different route via the `next/link` component or by using `next/router`. However, we can export `getServerSideProps` on each page of our app to force Next to always run `getInitialProps` on the server, e.g.

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

### Step 8. Create a custom hook to access config

Now the only thing left is to create a hook that will allow us to access the config easier, e.g.

```js
// hooks/useConfig.js

import { useContext } from 'react';
import { ConfigContext } from 'providers/config';

export const useConfig = () => {
  return useContext(ConfigContext);
};
```

### Step 9. Start using the `useConfig` hook wherever needed

Now you can use `useConfig` to access all of your public variables, e.g.

```js
// components/header.js

import useConfig from 'hooks/useConfig';

const Header = () => {
  const { config } = useConfig();
  const { supportedChains } = config;

  return (
    <header>
      <p>Supported networks: {supportedChains.join(', ')}</p>
    </header>
  );
};

export default Header;
```

### Step 10. Create the `useChain` hook

This hook will help us access the currently active chain,

```js
// hooks/useChain.js

import { useWeb3React } from '@web3-react/core';
import { useConfig } from './useConfig';

export default function useChain() {
  const { config } = useConfig();
  // defaults to defaultChain if no wallet is connected
  const { chainId = config.defaultChain } = useWeb3React();

  return chainId;
}
```

### Step 11. Turns functions into hooks

Unfortunately, you cannot use the `useConfig` hook in regular JavaScript functions, this is why you will have to re-write those into hooks. As an example, we will consider an utility function that allows us to build an Etherscan link based on the current network and tx hash.

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
// component/Transaction
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

```js
// hooks/useEtherscanLink

import useChain from 'hooks/useChain'

const ETHERSCAN_SUBDOMAINS_BY_NETWORK = {
  [1]: '',
  [3]: 'ropsten.',
  [4]: 'rinkeby.',
  [5]: 'goerli.',
  [42]: 'kovan.',
};

export default useEtherscanLink(hash) {
  const chain = useChain();

  return `https://${ETHERSCAN_SUBDOMAINS_BY_NETWORK(chain)}/tx/${hash}`
};
```

And now use the hook like so,

```js
// component/Transaction
import { ACTIVE_CHAIN } from 'config';
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

### Step 12. Using private variables

Up until we only talked about public variables that are necessary for the client-side code. Now you will learn how to use server-side config to access private variables. Fortunately, it's much less complicated. You can use Next's `getConfig` function to access the variables directly, e.g.

```js
// pages/index.js
import getConfig from 'next/config';

const IndexPage = ({ dataFromApi }) => {
  return <p>{dataFromApi}</p>;
};

IndexPage.getServerSideProps = async () => {
  const { serverRuntimeConfig } = getConfig();

  // this is the varible that we've exported in next.config.js
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
