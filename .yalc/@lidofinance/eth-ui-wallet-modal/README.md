# @lidofinance/eth-ui-wallet-modal

Widget EVM wallet modal.

### Installation
```bash
yarn add @lidofinance/eth-ui-wallet-modal

# and react 17
yarn add react@^17.0.0

# or react 18
yarn add react@^18.0.0

# and additional
yarn add styled-components@^5.3.5 @lidofinance/lido-ui@^3.6.1 @reef-knot/connect-wallet-modal@^0.5.2 @reef-knot/web3-react@^0.3.0 @lidofinance/ui-primitives@^<TODO> @lidofinance/eth-ui-primitives@^<TODO>
```

### Getting started

#### 🔮 Provider

```tsx
import { ProviderWalletModal } from '@lidofinance/eth-ui-wallet-modal';

// More info about `reefKnot` you can see in `./types.ts` type `ProviderWalletModalProps`
<ProviderWalletModal
  reefKnot={{
    walletsMetrics: walletsMetrics,
    hiddenWallets: ['Opera Wallet'],
  }}
>
  <SomeComponent />
</ProviderWalletModal>
```
**PAY ATTENTION** that `ProviderWalletModal` requires `CookieThemeProvider` from `@lidofinance/lido-ui`,
but you don't need to wrap it like:
```tsx
<CookieThemeProvider>
  <ProviderWalletModal />
</CookieThemeProvider>
```
because `ProviderWalletModal` was wrapped by `CookieThemeProvider` inside itself
(more details see in `src/provider.tsx`)

#### 👛 WalletButton component

Use `WalletButton` component to show button that open modal with connected wallet info (more detail `src/components/connectedWalletInfoModal`).

The `WalletButton` use `ConnectedWalletInfoModal` always and you can't change it.

P.S. Example you can find on [Lido frontend template](https://github.com/lidofinance/lido-frontend-template).


#### 👛 WalletConnectButton component

Use `WalletConnectButton`component to show button that open modal with connect wallet options.

The `WalletButton` use `WalletsModalForEth` from `@reef-knot` package always, so you can't change it.

P.S. Example you can find on [Lido frontend template](https://github.com/lidofinance/lido-frontend-template).

#### 🤔 I need to change a default behavior for `WalletButton` or/and `WalletConnectButton`

1. You can copy this code and make your own implementation on widget side.
2. You can contact with us.

