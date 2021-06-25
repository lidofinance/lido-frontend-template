# Lido Frontend Template Documentation

This document outlines the template's structure, provides general guidelines and explains best practices for Lido frontend development. The template is mainly Ethereum-focused but it can be easily modified for different blockchains while preserving the general structure of the project.

## Stack

The Lido Frontend Template stack includes:
- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/docs/getting-started) | API routes, server-side rendering
- [ethers](https://docs.ethers.io/v5/) | Ethereum library
- [web3react](https://github.com/NoahZinsmeister/web3-react) | Web3 Provider and wallet connectors
- [SWR](https://swr.vercel.app/) | Data fetching and caching
- [Lido UI](https://github.com/lidofinance/ui) | Lido UI React component library
- [styled-components](https://styled-components.com/docs) | custom styled React components 

## Environment variables

Please **avoid** using public runtime variables with the `NEXT_PUBLIC_` prefix. This ensures that the testnet and production deployments of your application can be smoothly integrated into our CI pipeline. 

If you need to access an environment variable in the client (e.g. supported networks, analytics IDs), make sure you follow the procedure below,

**Step 1.** Specify a variable in `.env.local`, e.g.
```bash
# .env.local
MY_PUBLIC_VAR=hello
```

**Step 2.** Add it to `publicRuntimeConfig` in `next.config.js`
```js
// next.config.js

const myPublicVar = process.env.MY_PUBLIC_VAR;

module.exports = {
  // ...
  publicRuntimeConfig: {
    // ...
    myPublicVar,
  }
}
```

If you take a look at `_app.tsx`, you will see than the public runtime config will be passed down to our app context using the `getInitialProps` function.

**Step 3.** Export the `getServerSideProps` function from each page where you are planning to use your variable. The function doesn't have to return anything but it forces Next.js to run `getInitialProps` on the server.

```ts
// index.tsx

const HomePage: FC<Props> = () => {
  // ...
};

export const getServerSideProps: GetServerSideProps<WithdrawProps> =
  async () => {
    return { 
      props: {}
    };
  };
```

**Step 4.** Use the `useConfig` hook to extract the variable

```ts
const MyComponent: FC<{}> = () => {
  const { config } = useConfig();
  const { myPublicVar } = config;

  return <p>{myPublicVar}</p>
};
```

Read more about [runtime configuration](https://nextjs.org/docs/api-reference/next.config.js/runtime-configuration) and [automatic static optimization](https://nextjs.org/docs/advanced-features/automatic-static-optimization)

## JSON RPC Provider
Apart from Web3 connection provided by the user's wallet, we use an additional JSON RPC connection to be able to query Ethereum before Web3 connection is established. This allows us to show any relevant information the user might need to know before deciding to connect their wallet.

This means that you may have to register an account with a third-party Ethereum provider such [Infura](https://infura.io/) or [Alchemy](https://www.alchemy.com/) whose free plans are more than enough for development. Once you get your hands on the API Key, specify it in your `.env.local` and you are ready to go.

To use JSON RPC Provider, use the `useEthRpcSwr` hook like so,
```ts
function MyComponent: FC<{}> = () => {
  const gasPrice = useEthRpcSwr('getGasPrice');
  // ..
}
```
---
In order to ensure that pre-paid production API keys do not end up getting shipped to the user's browser, we have an API route at `pages/api/rpc.ts` that proxies all Ethereum JSON RPC requests.


## Interacting with a contract

**Step 1.** Before you are ready to work with your contract, you will need add its ABI to the `abi` directory and have `typechain` generate the contract factory and infer its types by running,
```bash
yarn typechain
```
If everything goes well, you will see `generated` directory in the root of the project.

**Step 2.** After that, fill out `config/tokens.ts` and `config/abi.ts`. These files contain utilities that will help us access the contract.

**Step 3.** Create your token provider in `providers/tokens.ts`, e.g.
```ts
// providers/tokens.ts

// ...
export const myToken = getTokenProvider(TOKENS.myToken);
const MyTokenProvider = memo(myToken.TokenProvider);

const TokensProvider: Provider = ({ children }) => {
  return <MyTokenProvider>{children}</MyTokenProvider>;
};
// ...
```
This creates a React context that will provide both the JSON RPC and Web3 contract interfaces which will allow us to use read and write methods respectively.

**Step 4.** Create a custom hook to be able to easily access the context.
```ts
import { useContext } from 'react';
import { myToken, TokenContextValue } from 'providers';
import { TOKENS } from 'config';

export const useMyToken = (): TokenContextValue<TOKENS.myToken> => {
  return useContext(myToken.TokenContext);
};
```

**Step 5.** Start working with your contract like so,
```ts
const MyComponent: FC<{}> = () => {
  const myToken = useMyToken();

  const totalSupply = useContractRpcSwr(myToken.contractRpc, 'totalSupply');

  const handleSubmit = (to, value) => {
    myToken.contractWeb3.transfer(to, value);
  };
};
```

## Lido UI React Components Library
In order to ensure visual consistency across all Lido frontends and to speed up the development process, Lido has a React Components library that is distributed as an npm package, `@lidofinance/lido-ui`. It comes with two themes (light and dark) and various basic components including buttons, blocks, inputs, accordions, tables, text components, modals, icons, identicons, tooltips and more. 

It is already listed as a dependency to this project and you may start using it right away, e.g. 
```ts
import { Button } from '@lidofinance/lido-ui';

const MyComponent: FC<{}> = () => {
  return (
    <Button fullwidth color="primary" variant="outlined">
      Click me
    </Button>
  )
}
```

If you want to minimize the size of your JavaScript bundle, you can tree-shake the library for necessary components. Install individual packages like so,
```bash
yarn add @lidofinance/button
```

For more visit the Lido UI repository at: https://github.com/lidofinance/ui

Check out Lido UI Storybook at: https://ui.lido.fi/

## Git commit messages
Please make sure to use [conventional commit messages](https://www.conventionalcommits.org/en/v1.0.0/) to keep the automatic versioning working, e.g.
```bash
# bumps to minor version 2.0.1 -> 2.0.2
git commit -m "fix: typo in README"

# bumps to major version 2.0.2 -> 3.0.0
git commit -m "feat!: dark theme"
```