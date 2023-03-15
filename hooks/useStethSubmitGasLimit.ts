import {
  BigNumber,
  constants as ethersConstants,
  utils as ethersUtils,
} from 'ethers';
import { CHAINS } from '@lido-sdk/constants';
import { useLidoSWR, useSTETHContractRPC } from '@lido-sdk/react';
import { useWeb3 } from '@reef-knot/web3-react';

import { getStaticRpcBatchProvider } from 'utils/rpcProviders';

import {
  getBackendRPCPath,
  STETH_SUBMIT_GAS_LIMIT_DEFAULT,
  ESTIMATE_ACCOUNT,
} from 'consts';

type UseStethSubmitGasLimit = () => number | undefined;

export const useStethSubmitGasLimit: UseStethSubmitGasLimit = () => {
  const stethContractRPC = useSTETHContractRPC();

  const { chainId } = useWeb3();
  const { data } = useLidoSWR(
    ['swr:submit-gas-limit', chainId],
    async (_key, _chainId) => {
      if (!_chainId) {
        return;
      }

      const provider = getStaticRpcBatchProvider(
        _chainId as CHAINS,
        getBackendRPCPath(_chainId as CHAINS),
      );

      const feeData = await provider.getFeeData();
      const maxPriorityFeePerGas = feeData.maxPriorityFeePerGas ?? undefined;
      const maxFeePerGas = feeData.maxFeePerGas ?? undefined;

      const gasLimit = await stethContractRPC.estimateGas
        .submit(ethersConstants.AddressZero, {
          from: ESTIMATE_ACCOUNT,
          value: ethersUtils.parseEther('0.001'),
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
