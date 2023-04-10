# @lidofinance/ui-next-pages

Common next UI pages.

### Installation
```bash
yarn add @lidofinance/ui-next-pages

# and react 17
yarn add react@^17.0.0

# or react 18
yarn add react@^18.0.0

# and additional
yarn add next@^12.3.0 @lidofinance/lido-ui@^3.6.1
```

## Getting started

### Custom error page in Next.js

Example for `pages/404.tsx`

```tsx
import { FC } from 'react';
import { PageError } from '@lidofinance/next-ui-pages';

const Page404: FC = () => <PageError title="404" content="Page Not Found" />;

export default Page404;

```
