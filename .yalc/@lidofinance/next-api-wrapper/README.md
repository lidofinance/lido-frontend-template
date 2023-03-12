# @lidofinance/next-api-wrapper

Wrapper for next server api requests.

## Installation

`yarn add @lidofinance/next-api-wrapper`.

## Getting started

### wrapRequest

```ts
import { wrapRequest, API } from '@lidofinance/next-api-wrapper'
import { NextApiRequest, NextApiResponse } from 'next'

const someRequest: API = async (req, res) => await fetch()

export default wrapRequest([SomeWrapper])(someRequest)
```

## Examples

### Default error handler

```ts
import { wrapRequest, defaultErrorHandler } from '@lidofinance/next-api-wrapper'
import { NextApiRequest, NextApiResponse } from 'next'

export type API = (req: NextApiRequest, res: NextApiResponse) => Promise<void>

const CUSTOM_API_ERROR_MESSAGE = 'Default message'
const someRequest: API = async (req, res) => await fetch()

export default wrapRequest([defaultErrorHandler()])(someRequest)
// or
export default wrapRequest([defaultErrorHandler({ errorMessage: CUSTOM_API_ERROR_MESSAGE, serverLogger: SomeLogger })])(
  someRequest,
)
```

### Cache control

```ts
import { wrapRequest, cacheControl } from '@lidofinance/next-api-wrapper'
import { NextApiRequest, NextApiResponse } from 'next'

export type API = (req: NextApiRequest, res: NextApiResponse) => Promise<void>

const CUSTOM_CACHE_HEADERS = 'public, max-age=180'
const CUSTOM_ERROR_CACHE_HEADERS = 'no-store'
const someRequest: API = async (req, res) => await fetch()

// use default headers
export default wrapRequest([cacheControl()])(someRequest)
// or
export default wrapRequest([cacheControl({ headers: CUSTOM_CACHE_HEADERS, errorHeaders: CUSTOM_ERROR_CACHE_HEADERS })])(
  someRequest,
)
```

### Mixing wrappers

```ts
import { wrapRequest, cacheControl, defaultErrorHandler } from '@lidofinance/next-api-wrapper'
import { NextApiRequest, NextApiResponse } from 'next'

export type API = (req: NextApiRequest, res: NextApiResponse) => Promise<void>

const CUSTOM_API_ERROR_MESSAGE = 'Default message'
const CUSTOM_CACHE_HEADERS = 'public, max-age=180'
const CUSTOM_ERROR_CACHE_HEADERS = 'no-store'
const someRequest: API = async (req, res) => await fetch()

// defaultErrorHandler must be last in the wrapper stack
export default wrapRequest([cacheControl(), defaultErrorHandler()])(someRequest)
// or
export default wrapRequest([
  cacheControl({ headers: CUSTOM_CACHE_HEADERS, errorHeaders: CUSTOM_ERROR_CACHE_HEADERS }),
  defaultErrorHandler({ errorMessage: CUSTOM_API_ERROR_MESSAGE }),
])(someRequest)
```

### Creation of ready mixed wrappers

```ts
import { wrapRequest, cacheControl, defaultErrorHandler } from '@lidofinance/next-api-wrapper'
import { NextApiRequest, NextApiResponse } from 'next'

export type API = (req: NextApiRequest, res: NextApiResponse) => Promise<void>

const DEFAULT_API_ERROR_MESSAGE = 'Default message'
const CACHE_HEADERS = 'public, max-age=180'
// defaultErrorHandler must be last in the wrapper stack
export const defaultErrorAndCacheWrapper = wrapRequest([cacheControl(), defaultErrorHandler()])

const someRequest: API = async (req, res) => await fetch()

export default defaultErrorAndCacheWrapper(someRequest)
```
