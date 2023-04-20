# @lidofinance/eth-ui-primitives

Ethereum directional package with UI primitives: components, utils.

## Installation
```bash
yarn add @lidofinance/eth-ui-primitives

# and react 17
yarn add react@^17.0.0

# or react 18
yarn add react@^18.0.0

# and additional
yarn add styled-components@^5.3.5 @reef-knot/web3-react@^0.3.0 @lidofinance/lido-ui@^3.6.1 @lidofinance/ui-primitives@^<TODO>
```

## Getting started

Make sure that your **project** was wrapped by `CookieThemeProvider` from [@lidofinance/lido-ui](https://github.com/lidofinance/ui/tree/main/packages/theme).

### Components

#### FormatToken:
```tsx
import { constants } from 'ethers'
import { FormatToken } from '@lidofinance/eth-ui-primitives'

// MaxInt256 is BigNumber
const { MaxInt256 } = constants

export const Component: FC = () => {
  return (
    <FormatToken amount={balance} symbol="ETH"/>
  )
}
```


#### TokenToWallet:
```tsx
import { TokenToWallet } from '@lidofinance/eth-ui-primitives'

const stethAddress = '0xae7ab96520de3a18e5e111b5eaab095312d7fe84'

export const Component: FC = () => {
  return (
    <TokenToWallet address={stethAddress} />
  )
}
```

#### WalletFallback:
```tsx
// `useWeb3` and other imports what is out of context here
const EthWalletCard: EthWalletCardComponent = (props) => {
  // ...
}

const EthWalletCardWrapper: EthWalletCardComponent = (props) => {
  const { active } = useWeb3()
  return active ? <EthWalletCard {...props} /> : <WalletFallback {...props} />
}

export default EthWalletCardWrapper
```


### Utils

#### formatFloorEtherBalance:
```tsx
import { constants } from 'ethers'
import { formatFloorEtherBalance } from '@lidofinance/eth-ui-primitives'

// MaxInt256 is BigNumber
const { MaxInt256 } = constants
const maxDecimalDigits = 4
const formatedBalance = formatFloorEtherBalance(MaxInt256, maxDecimalDigits)
```
