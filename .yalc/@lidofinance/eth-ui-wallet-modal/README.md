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

<ProviderWalletModal
  reefKnot={{
    walletsMetrics: walletsMetrics,
    hiddenWallets: ['Opera Wallet'],
  }}
>
  <SomeComponent />
</ProviderWalletModal>
```
More info about `reefKnot` props you can see in:
- `./types.ts` type [ProviderWalletModalProps](./packages/packages/eth/ui/wallet-modal/src/types.ts)
- about `walletsMetrics` here [@reef-knot metrics demo](https://github.com/lidofinance/reef-knot/blob/main/apps/demo-react/util/metrics.ts)
- about `hiddenWallets` here [@reef-knot/connect-wallet-modal](https://github.com/lidofinance/reef-knot/blob/main/packages/connect-wallet-modal/README.md)

**PAY ATTENTION** that `ProviderWalletModal` requires `CookieThemeProvider` from `@lidofinance/lido-ui`,
but you don't need to wrap it like:
```tsx
<CookieThemeProvider>
  <ProviderWalletModal />
</CookieThemeProvider>
```
because `ProviderWalletModal` source code was wrapped by `CookieThemeProvider` [more details](./packages/eth/ui/wallet-modal/src/provider.tsx).

#### 👛 WalletButton component

Use `WalletButton` component to show button that open modal with connected wallet info [more detail](./packages/eth/ui/wallet-modal/src/components/connectedWalletInfoModal).

The `WalletButton` use `ConnectedWalletInfoModal` always and you can't change it.

P.S. Example you can find on [Lido frontend template](https://github.com/lidofinance/lido-frontend-template).


#### 👛 WalletConnectButton component

Use `WalletConnectButton`component to show button that open modal with connect wallet options.

The `WalletButton` use `WalletsModalForEth` from `@reef-knot` package always, so you can't change it.

P.S. Example you can find on [Lido frontend template](https://github.com/lidofinance/lido-frontend-template).

#### 🤔 I need to change a default behavior for `WalletButton` or/and `WalletConnectButton`

1. You can copy this code and make your own implementation on widget side.
2. You can contact with us [Discord](https://discord.com/channels/761182643269795850/931178453754081290).
