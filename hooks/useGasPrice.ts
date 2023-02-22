import { useCallback, useEffect, useState } from 'react';
import { BigNumber } from 'ethers';

import { useWeb3 } from '@reef-knot/web3-react';
import { CHAINS } from '@lido-sdk/constants';
import { getStaticRpcBatchProvider } from '@lido-sdk/providers';

import { ONE_GWEI, getBackendRPCPath } from 'consts';

export const useGasPrice = (): BigNumber | undefined => {
  const [gasPrice, setGasPrice] = useState<BigNumber>();
  const { chainId } = useWeb3();

  const getGasPrice = useCallback(async () => {
    const staticProvider = getStaticRpcBatchProvider(
      chainId as CHAINS,
      getBackendRPCPath(chainId as CHAINS),
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
