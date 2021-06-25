import { BigNumber, BigNumberish } from '@ethersproject/bignumber';
import { formatEther } from '@ethersproject/units';
import { useMemo } from 'react';
import { useSWR } from './useSwr';
import { ethPriceFetcher } from 'utils';
import { useEthRpcSwr } from './useEthRpcSwr';

export const useTxCost = (
  gasLimit: BigNumberish,
): {
  cost: number | null;
  initialLoading: boolean;
} => {
  const eth = useSWR('ethPrice', ethPriceFetcher);
  const gas = useEthRpcSwr('getGasPrice');

  const error = eth.error || gas.error;
  const ethPrice = eth.data;
  const gasPrice = gas.data;

  const initialLoading = eth.initialLoading || gas.initialLoading;

  const cost = useMemo(() => {
    if (error || !gasLimit || !ethPrice || !gasPrice) {
      return null;
    }

    const txCostInWei = gasPrice.mul(BigNumber.from(gasLimit));
    const txCostInEth = formatEther(txCostInWei);

    return parseFloat(ethPrice) * parseFloat(txCostInEth);
  }, [ethPrice, gasPrice, gasLimit, error]);

  return { cost, initialLoading };
};
