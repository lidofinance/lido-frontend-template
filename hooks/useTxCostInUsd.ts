import { useCallback, useEffect, useState } from 'react';
import { useEthPrice } from '@lido-sdk/react';
import { weiToEth } from 'utils';

import { useTxCostInWei } from './useTxCostInWei';

type UseTxCostInUsd = (gasLimit?: number) => number | undefined;

export const useTxCostInUsd: UseTxCostInUsd = (gasLimit) => {
  const txCostInWei = useTxCostInWei(gasLimit);

  // useEthPrice hook works via mainnet chain!
  const { data: ethInUsd } = useEthPrice() as {
    data?: number;
    update: () => void;
  };

  const [txCostInUsd, setTxCostInUsd] = useState<number>();

  const calculateTxCostInUsd = useCallback(() => {
    if (!ethInUsd || !txCostInWei) return;

    const _txCostInEth = weiToEth(txCostInWei);
    const _txCostInUsd = _txCostInEth * ethInUsd;
    setTxCostInUsd(_txCostInUsd);
  }, [ethInUsd, txCostInWei]);

  useEffect(() => {
    calculateTxCostInUsd();
  }, [calculateTxCostInUsd]);

  return txCostInUsd;
};
