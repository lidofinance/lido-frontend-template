# @lidofinance/ui-primitives

Widget UI primitives: components, constants, hooks.

This component abstracted from the blockchain network,
other words you can use it for any widgets for any blockchains.

## Installation
```bash
yarn add @lidofinance/ui-primitives

# and react 17
yarn add react@^17.0.0

# or react 18
yarn add react@^18.0.0

# and additional
yarn add next@^12.3.0 styled-components@^5.3.5 @lidofinance/lido-ui@^3.6.1
```

## Using

### Wallet components

You can make wallet components (like in image below) via `@lidofinance/ui-primitives` package.

<img width="500" src="./../../../.github/assets/ui-primitives/wallet.png">
<img width="500" src="./../../../.github/assets/ui-primitives/walletFallback.png">

#### Example based on Eth:

```tsx
// `useWeb3` and other imports what is out of context here
import {
  WalletCard,
  WalletCardRow,
  WalletCardBalance,
  WalletCardAccount,
} from '@lidofinance/ui-primitives'
import { Divider } from '@lidofinance/lido-ui'

const EthWalletCard: EthWalletCardComponent = (props) => {
  // `account`, `openModal` and other what is out of context here

  return (
    <WalletCard {...props}>
      <WalletCardRow>
        <WalletCardBalance
          title="Eth balance"
          loading={false}
          value={'100.00 ETH'}
        />
        <WalletCardAccount account={account} onClickCb={openModal} />
      </WalletCardRow>
      <Divider />
      <WalletCardRow>
        <WalletCardBalance
          small
          title="Token balance"
          loading={false}
          value={'1000.00 stETH'}
        />
        <WalletCardBalance
          small
          title="Token balance"
          loading={false}
          value={'1000.00 wstETH'}
        />
      </WalletCardRow>
    </WalletCard>
  )
}

const EthWalletCardWrapper: EthWalletCardComponent = (props) => {
  const { active } = useWeb3()
  return active ? <EthWalletCard {...props} /> : <WalletFallback {...props} />
}

export default EthWalletCardWrapper
```

### Hooks

#### useCopyToClipboard:

```tsx
import { useCopyToClipboard } from '@lidofinance/ui-primitives'

const handleCopy = useCopyToClipboard('Some text, for example account address')

const EthWalletCard: EthWalletCardComponent = (props) => {
  return (
    <Button onClick={handleCopy} >
      Copy text
    </Button>   
  )
}
```
