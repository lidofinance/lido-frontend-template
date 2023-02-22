import { useCallback, useEffect, useState } from 'react';
import { BigNumber } from 'ethers';

import { useSDK } from '@lido-sdk/react';
import { getStaticRpcBatchProvider } from '@lido-sdk/providers';

import { ONE_GWEI, getBackendRPCPath } from 'consts';

export const useGasPrice = (): BigNumber | undefined => {
  const [gasPrice, setGasPrice] = useState<BigNumber>();
  const { chainId } = useSDK();

  const getGasPrice = useCallback(async () => {
    const staticProvider = getStaticRpcBatchProvider(
      chainId,
      getBackendRPCPath(chainId),
    );

    try {
      const newGasPrice = await staticProvider.getGasPrice();
      setGasPrice(newGasPrice);
    } catch (e) {
      console.error(e);
      setGasPrice(ONE_GWEI);
    }
  }, [chainId]);

  useEffect(() => {
    void getGasPrice();
  }, [getGasPrice]);

  return gasPrice;
};
