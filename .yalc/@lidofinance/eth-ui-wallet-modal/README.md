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
yarn add styled-components@^5.3.5 @lidofinance/lido-ui@^3.0.0 @reef-knot/connect-wallet-modal@^0.5.2 @reef-knot/web3-react@^0.3.0 @reef-knot/ui-react@^0.2.0
```

## Getting started

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
