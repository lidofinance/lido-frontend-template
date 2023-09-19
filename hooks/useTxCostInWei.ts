import { useCallback, useEffect, useState } from 'react';
import { BigNumber } from 'ethers';

import { useGasPrice } from './useGasPrice';

export const useTxCostInWei = (gasLimit?: number): BigNumber | undefined => {
  const gasPrice = useGasPrice();

  const [txCostInWei, seTxCostInWei] = useState<BigNumber>();

  const calculateTxCostInWei = useCallback(() => {
    if (!gasPrice || !gasLimit) return;

    const gasLimitBN = BigNumber.from(gasLimit);
    seTxCostInWei(gasLimitBN.mul(gasPrice));
  }, [gasLimit, gasPrice]);

  useEffect(() => {
    calculateTxCostInWei();
  }, [calculateTxCostInWei]);

  return txCostInWei;
};
