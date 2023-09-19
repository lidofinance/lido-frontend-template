# @lidofinance/ui-pages

Common UI pages.

## Installation

- React 17 | 18

```bash
yarn add @lidofinance/ui-pages

# and additional
yarn add @lidofinance/lido-ui@^3.6.1
```

## Getting started

### Service page

```tsx
import React, { FC, ReactNode } from 'react'
import Head from 'next/head'
import { ServicePage } from '@lidofinance/ui-pages'

export type PageErrorProps = { title: string; content: ReactNode }

export const PageError: FC<PageErrorProps> = ({ title, content }) => (
  <ServicePage title={title}>
    <Head>
      <title>{title}</title>
    </Head>
    {content}
  </ServicePage>
)
```
