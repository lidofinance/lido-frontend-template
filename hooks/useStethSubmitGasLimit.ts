import { BigNumber } from 'ethers';
import { AddressZero } from '@ethersproject/constants';
import { parseEther } from '@ethersproject/units';
import { CHAINS } from '@lido-sdk/constants';
import { useLidoSWR, useSTETHContractRPC } from '@lido-sdk/react';
import { useWeb3 } from '@reef-knot/web3-react';

import { getStaticRpcBatchProvider } from 'utils/rpcProviders';

import { getBackendRPCPath, STETH_SUBMIT_GAS_LIMIT_DEFAULT } from 'config';
import { ESTIMATE_ACCOUNT } from '../constants'; // TODO

type UseStethSubmitGasLimit = () => number | undefined;

export const useStethSubmitGasLimit: UseStethSubmitGasLimit = () => {
  const stethContractRPC = useSTETHContractRPC();

  const { chainId } = useWeb3();
  const { data } = useLidoSWR(
    ['swr:submit-gas-limit', chainId],
    async (_key, chainId) => {
      if (!chainId) {
        return;
      }

      const provider = getStaticRpcBatchProvider(
        chainId as string,
        // TODO: add a way to type useWeb3 hook
        getBackendRPCPath(chainId as CHAINS),
      );

      const feeData = await provider.getFeeData();
      const maxPriorityFeePerGas = feeData.maxPriorityFeePerGas ?? undefined;
      const maxFeePerGas = feeData.maxFeePerGas ?? undefined;

      const gasLimit = await stethContractRPC.estimateGas
        .submit(AddressZero, {
          from: ESTIMATE_ACCOUNT,
          value: parseEther('0.001'),
          maxPriorityFeePerGas,
          maxFeePerGas,
        })
        .catch((error) => {
          console.warn(error);
          return BigNumber.from(STETH_SUBMIT_GAS_LIMIT_DEFAULT);
        });

      return +gasLimit;
    },
  );

  return data ?? STETH_SUBMIT_GAS_LIMIT_DEFAULT;
};
