import { FC } from 'react';
import { DataTable, DataTableRow } from '@lidofinance/lido-ui';

// TODO: move
const DATA_UNAVAILABLE = 'DATA_UNAVAILABLE';

const FutureTxInfo: FC = () => {
  // TODO: fetch
  const willReceiveStEthValue = 1;
  const txCostInUsd = 2.38;
  const lidoFee = {
    initialLoading: false,
    data: 1000,
  };

  return (
    <DataTable>
      <DataTableRow title="You will receive">
        {willReceiveStEthValue} stETH
      </DataTableRow>
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

export default FutureTxInfo;
