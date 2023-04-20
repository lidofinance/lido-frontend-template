# @lidofinance/next-ui-primitives

Next UI primitives: components, constants, hooks etc.

This component abstracted from the blockchain network,
other words you can use it for any widgets for any blockchains.

This component based on Next.js.

## Installation
```bash
yarn add @lidofinance/next-ui-primitives

# and react 17
yarn add react@^17.0.0

# or react 18
yarn add react@^18.0.0

# and additional
yarn add next@^12.3.0
```

## Using

### Components

#### LidoLink:

Should use for **external** (https://lido.fi/) or **local links** (`/example-page?ref=SOME_REF&embed=SOME_EMBED`).

You can pass a `ref` and `embed` query string parameters between **local links**:

- `ref` is needed for referral program;
- `embed` is needed for support of `staking widget` via iframe in `ledger live`.

Below an example how to make custom styles of **LidoLink**:

```tsx
import React, { FC } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { LidoLink, LidoLinkProps } from '@lidofinance/next-ui-primitives'

export type NavigationLinkProps = LidoLinkProps & {
  icon: React.ReactNode
  title: string
  href: string
}

export const NavigationLinkStyle = styled(LidoLink)<{ $active: boolean }>`
  // Some custom styles...
`

export const Component: FC<NavigationLinkProps> = ({ icon, title, href, ...rest }) => {
  const { pathname } = useRouter()

  // compare without query string
  const active = pathname === href.split('?')[0]

  return (
    <NavigationLinkStyle {...rest} href={href} $active={active}>

    <React.Fragment>
        {icon}
        <span>{title}</span>
      </React.Fragment>
    </NavigationLinkStyle>
  )
}
```
Also, see [NavigationLink component](./packages/next/widget-app/src/layoutComponents/header/components/navigation/components/navigationLink/navigationLink.tsx) 
