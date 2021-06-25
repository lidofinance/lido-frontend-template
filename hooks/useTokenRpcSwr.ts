import { ContractByToken, TOKENS } from 'config';
import { SWRResponse } from './useSwr';
import { createRpcTokenContract } from 'utils';
import { FilterMethods, UnpackedPromise } from 'types';
import { useChain } from './useChain';
import { useContractRpcSwr } from './useContractRpcSwr';
import { useGlobalMemo } from './useGlobalMemo';

export const useTokenRpcSwr = <
  T extends TOKENS,
  C extends ContractByToken<T>,
  M extends FilterMethods<C>,
  R extends UnpackedPromise<ReturnType<C[M]>>,
>(
  token: T,
  method: M | null,
  ...params: Parameters<C[M]>
): SWRResponse<R, Error> => {
  const chainId = useChain();

  const contract = useGlobalMemo(() => {
    return createRpcTokenContract(chainId, token);
  }, `token-contract-${chainId}-${token}`) as C;

  return useContractRpcSwr<C, M, R>(contract, method, ...params);
};
