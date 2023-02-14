import { FC } from 'react';
import { DataTable, DataTableRow } from '@lidofinance/lido-ui';
import { useLidoSWR } from '@lido-sdk/react';

import { standardFetcher } from '@common/utils';
import { DATA_UNAVAILABLE } from '@common/texts';

const FutureTxInfo: FC = () => {
  const oneInchData = useLidoSWR<number>('/api/oneinch-rate', standardFetcher);
  const oneInchRate =
    oneInchData && oneInchData.data
      ? (100 - (1 / oneInchData.data) * 100).toFixed(2)
      : 1;

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
      <DataTableRow title="1inch rate" loading={oneInchData.initialLoading}>
        {oneInchRate}
      </DataTableRow>
    </DataTable>
  );
};

export default FutureTxInfo;
