# @lidofinance/next-widget-layout

Layout components: header, main, footer, etc.

## Installation

```bash
yarn add @lidofinance/next-widget-layout

# react 17
yarn add react@^17.0.0
# or react 18
yarn add react@^18.0.0

# next 12
yarn add react@^12
# or next 13
yarn add react@^13

# other packages 
yarn add styled-components@^5.3.5 @lidofinance/lido-ui@^3.7.3 @lidofinance/next-ui-primitives@^0.27.0
```

## Getting started

Example for `pages/_app.tsx`:

```tsx
import React, { FC } from 'react'
import NextApp, { AppProps } from 'next/app'
import { useWeb3 } from 'reef-knot/web3-react'

import { WalletButton, WalletConnectButton } from '@lidofinance/eth-ui-wallet-modal'
import { Header, Main, Footer, NavigationAdaptive, NavigationLink } from '@lidofinance/next-widget-layout'
import { Stake, Withdraw } from '@lidofinance/lido-ui'

const Navigation: FC = () => (
  <NavigationAdaptive>
    <NavigationLink title='Stake' href='/' icon={<Stake />} />
    <NavigationLink title='Withdrawals' href='/withdrawals' icon={<Withdraw />} />
  </NavigationAdaptive>
);

const HeaderActions: FC = () => {
  const { active } = useWeb3()
  return (
    <>
      {active ? <WalletButton /> : <WalletConnectButton size="sm" />}
    </>
  )
}

export const WidgetAppWrapper: FC<AppProps> = (props) => (
  <>
    <Header headerActions={<HeaderActions />}>
      <Navigation />
    </Header>
    <Main>
      <NextApp {...props} />
    </Main>
    <Footer />
  </>
)
```