# @lidofinance/next-ui-primitives

Next UI primitives: components, constants, hooks.

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

#### LocalLink:

```tsx
import { LocalLink } from '@lidofinance/next-ui-primitives'
// imports FC, INavigationLink, CustomLocalLinkStyle...

export const Component: FC<INavigationLink> = ({ icon, title, href }) => {
  return (
    // Fix hydration error via `legacyBehavior` https://github.com/vercel/next.js/issues/42358#issuecomment-1307230409
    <LocalLink href={href} passHref legacyBehavior>
      <CustomLocalLinkStyle active={true}>
        {icon}
        <span>{title}</span>
      </CustomLocalLinkStyle>
    </LocalLink>
  )
}
```

Also, see `navigationLink` in `/packages/next/widget-app/src/layoutComponents/header/components/navigation/components/navigationLink/navigationLink.tsx`
