# Lido Frontend Template Documentation

This document outlines the template's structure, provides general guidelines and explains best practices for Lido frontend development. 

## Structure

The Lido Frontend Template stack includes:
- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/docs/getting-started) -- API routes, server-side rendering
- [ethers](https://docs.ethers.io/v5/) | Ethereum library
- [web3react](https://github.com/NoahZinsmeister/web3-react) | Web3 Provider and wallet connectors
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

**Step 3.** Export the `getServerSideProps` function from each page where you are planning to use your variable. The function doesn't have to return anything but it forces the page Next.js to run `getInitialProps` on the server.

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