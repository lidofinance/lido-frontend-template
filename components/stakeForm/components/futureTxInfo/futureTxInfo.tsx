import { FC, memo } from 'react';
import { DataTable, DataTableRow } from '@lidofinance/lido-ui';
import { useSTETHContractRPC, useContractSWR } from '@lido-sdk/react';
import { DATA_UNAVAILABLE } from '@lidofinance/ui-primitives';

import { useStethSubmitGasLimit, useTxCostInUsd } from 'hooks';

import { FutureTxInfoProps } from './types';

const FutureTxInfo: FC<FutureTxInfoProps> = ({ amount }) => {
  const contractRpc = useSTETHContractRPC();
  const lidoFee = useContractSWR({
    contract: contractRpc,
    method: 'getFee',
  });

  const submitGasLimit = useStethSubmitGasLimit();
  const txCostInUsd = useTxCostInUsd(submitGasLimit);

  return (
    <DataTable>
      <DataTableRow title="You will receive">{amount} stETH</DataTableRow>
      <DataTableRow title="Exchange rate">1 ETH = 1 stETH</DataTableRow>
      <DataTableRow title="Transaction cost" loading={!txCostInUsd}>
        ${txCostInUsd?.toFixed(2)}
      </DataTableRow>
      <DataTableRow
        title="Reward fee"
        loading={lidoFee.initialLoading}
        help="Please note: this fee applies to staking rewards/earnings only,
        and is NOT taken from your staked amount. It is a fee on earnings only."
      >
        {!lidoFee.data ? DATA_UNAVAILABLE : `${lidoFee.data / 100}%`}
      </DataTableRow>
    </DataTable>
  );
};

export default memo<FC<FutureTxInfoProps>>(FutureTxInfo);
