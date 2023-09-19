# @lidofinance/rpc

Fetch extension to use it with RPC endpoints.

## Installation

`yarn add @lidofinance/rpc`

## Getting started

You can just use it as normal `fetch`, there are just a few types restrictions, and it will set right HTTP method for
you.

```ts
fetchRPC(url, { body: req.body })
```

## Examples

### Caching

Here is an example how you can extend `fetchRpc` by adding caching

```ts
import { FetchRpc, fetchRpc } from '@lidofinance/rpc'
import { Cache } from 'memory-cache'

export type CachedFetchRPC = FetchRpc<{ cacheKey: string }>

// Just a sample how to use extend fetchRPC
export const cachedFetchRpcFactory = (timeout: number): CachedFetchRPC => {
  const cache = new Cache<string, Response>()

  return async (url, init, { cacheKey }) => {
    const cachedValue = cache.get(cacheKey)
    if (cachedValue != null) {
      return cachedValue
    }
    const response = await fetchRpc(url, init)
    cache.put(cacheKey, response, timeout)
    return response
  }
}
```
