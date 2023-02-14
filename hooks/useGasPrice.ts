import { useCallback, useEffect, useState } from 'react';
import { BigNumber } from 'ethers';

import { useSDK } from '@lido-sdk/react';
import { ONE_GWEI } from '@common/constants';

export const useGasPrice = (): BigNumber | undefined => {
  const [gasPrice, setGasPrice] = useState<BigNumber>();
  const { providerRpc } = useSDK();

  const getGasPrice = useCallback(async () => {
    if (providerRpc) {
      try {
        // TODO: use staticRpcBatchProvider
        const newGasPrice = await providerRpc.getGasPrice();
        setGasPrice(newGasPrice);
      } catch (e) {
        console.error(e);
        setGasPrice(ONE_GWEI);
      }
    }
  }, [providerRpc]);

  useEffect(() => {
    getGasPrice();
  }, [getGasPrice]);

  return gasPrice;
};
