import { JsonRpcProvider } from '@ethersproject/providers';
import { useCallback } from 'react';
import { useSWR, SWRResponse } from './useSwr';
import { FilterMethods, UnpackedPromise } from 'types';
import { useChain } from './useChain';
import { useRpcLibrary } from './useRpcLibrary';

export const useEthRpcSwr = <
  C extends JsonRpcProvider,
  M extends FilterMethods<C>,
  R extends UnpackedPromise<ReturnType<C[M]>>,
>(
  method: M | null,
  ...params: Parameters<C[M]>
): SWRResponse<R, Error> => {
  const chainId = useChain();
  const library = useRpcLibrary() as C;

  const shouldFetch = method !== null;
  const cacheKey = chainId;
  const args = [cacheKey, method, ...params];

  const rpcFetcher = useCallback(
    (
      cacheKey: number,
      methodName: M,
      ...params: Parameters<C[M]>
    ): R | Promise<R> => {
      return library[methodName](...params);
    },
    [library],
  );

  return useSWR<R, Error>(shouldFetch ? args : null, rpcFetcher);
};
