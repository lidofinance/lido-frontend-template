import { useCallback, useEffect, useState } from 'react';
import { BigNumber } from 'ethers';

import { useWeb3 } from '@reef-knot/web3-react';
import { CHAINS } from '@lido-sdk/constants';
import { getStaticRpcBatchProvider } from '@lido-sdk/providers';

import { ONE_GWEI, getBackendRPCPath } from 'consts';

export const useGasPrice = (): BigNumber | undefined => {
  const [gasPrice, setGasPrice] = useState<BigNumber>(ONE_GWEI);
  const { chainId } = useWeb3();

  const getGasPrice = useCallback(async () => {
    if (!chainId) {
      return;
    }

    const staticProvider = getStaticRpcBatchProvider(
      chainId as CHAINS,
      getBackendRPCPath(chainId as CHAINS),
    );

    try {
      const newGasPrice = await staticProvider.getGasPrice();
      setGasPrice(newGasPrice);
    } catch (e) {
      console.error(e);
    }
  }, [chainId]);

  useEffect(() => {
    void getGasPrice();
  }, [getGasPrice]);

  return gasPrice;
};
