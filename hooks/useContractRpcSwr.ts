import { useCallback } from 'react';
import { useSWR, SWRResponse } from './useSwr';
import { FilterMethods, UnpackedPromise } from 'types';

export const useContractRpcSwr = <
  // eslint-disable-next-line @typescript-eslint/ban-types
  C extends Object,
  M extends FilterMethods<C>,
  R extends UnpackedPromise<ReturnType<C[M]>>,
>(
  contract: C,
  method: M | null,
  ...params: Parameters<C[M]>
): SWRResponse<R, Error> => {
  const shouldFetch = method !== null;
  const cacheKey = contract;
  const args = [cacheKey, method, ...params];

  const rpcFetcher = useCallback(
    (cacheKey: C, method: M, ...params: Parameters<C[M]>): R | Promise<R> => {
      return contract[method](...params);
    },
    [contract],
  );

  return useSWR<R, Error>(shouldFetch ? args : null, rpcFetcher);
};
