# HOW TO UPGRADE OR MAKE MIGRATION

Current Lido CI setup is built with this app template in mind.
If your project was built with custom code / fork of an older version of the staking widget,
most likely there would be changes required to make your app run smoothly.

### Step 0. Docs

READ FIRST [DOCS.md](./DOCS.md)!!!

### Step 1. Change all public environment variables to server-side

TODO: remove about `NEXT_PUBLIC_` prefix!

If you are using any public environment variables, i.e. those with the `NEXT_PUBLIC_` prefix,
you will have to change them to regular server-side variables by removing the prefix, e.g.

```bash
# .env.local

# before
NEXT_PUBLIC_MY_PUBLIC_VAR=hello
# after
MY_PUBLIC_VAR=hello
```

### Step 2. Export variables in `next.config.mjs` and `env-dynamics.mjs`

Now we need to rename `next.config.js` to [next.config.mjs](./next.config.mjs),
after to change it so that we can use the variables in our application.

We will export the private variables with the `serverRuntimeConfig` and
those variables that are essential for client-side JavaScript are specified in [env-dynamics.mjs](./env-dynamics.mjs).

...TODO...cache

Note! Don't use `publicRuntimeConfig`. It is avoid problems caching variables on the client side.

### Step 3. Install Lido Warehouse packages

About **Lido Warehouse packages** you can read [here](https://github.com/lidofinance/warehouse).

In the first steps, you will have enough:

- @lidofinance/lido-ui
- @lidofinance/eth-next-widget-app-evm **(only for EVM widgets)**
- @lidofinance/eth-ui-wallet-modal **(only for EVM widgets)**
- reef-knot **(only for EVM widgets)**
- ...<TODO>...

### Step 4. Wrap \_app.tsx

`#### EVM widget`
Go to `pages/_app.tsx` and:

- wrap that using the `EVMWidgetApp` provider like [here](https://github.com/lidofinance/warehouse/tree/main/packages/eth/next/widget-app-evm#use-evm-wrapper),
- or using the `AppWagmiConfig`, `ProviderWeb3`, `ProviderWalletModal`, `WidgetApp` providers step by step like [here](https://github.com/lidofinance/warehouse/tree/main/packages/eth/next/widget-app-evm#use-evm-wrapper).

Note! `WidgetApp` contains a layouts components such as:

- `Header`,
- `Main` - page content block,
- `Footer`,
- etc.

More info [here](https://github.com/lidofinance/warehouse/tree/main/packages/next/widget-layout).

If you need a completely different layout structure - see block `Not EVM widget` below.

#### Not EVM widget

For not EVM widget we haven't a ready solution. You should make it yourself.
For that you should go to `pages/_app.tsx` and need use `widget layout components` like example [here](https://github.com/lidofinance/warehouse/tree/main/packages/next/widget-layout#getting-started),
wrap their via a specific blockchain web3 provider solution.

#### Some examples

You can find:

- In [widget layout repo](https://github.com/lidofinance/warehouse/tree/main/packages/next/widget-layout#getting-started),
- in [\_app.example_without_widget_app_wrapper.tsx](./pages/_app.example_without_widget_app_wrapper.tsx),
- in [\_app.example_hand-made_EVM_wrapper.tsx](./pages/_app.example_hand-made_EVM_wrapper.tsx)

##### About HeaderActions

...TODO...

### Step N: Global styles

...TODO...

### Step N: See all PAY ATTENTION comments

...TODO...
...TODO 2... Needs script to remove PAY ATTENTION comments.

### Step N: Layout for each page

...TODO...
Draft: use LayoutTitle, LayoutSubTitle, Section

### Step N: How to error page

...TODO...
import { Page404 } from '@lidofinance/next-pages/ui';

### Step N: Metrics

...TODO...

### Step N: API helpers

...TODO...
