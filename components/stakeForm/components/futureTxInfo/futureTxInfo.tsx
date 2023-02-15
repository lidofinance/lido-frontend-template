import { FC } from 'react';
import { DataTable, DataTableRow } from '@lidofinance/lido-ui';
import { useSTETHContractRPC, useContractSWR } from '@lido-sdk/react';

import { DATA_UNAVAILABLE } from '@common/constants';

import { useStethSubmitGasLimit, useTxCostInUsd } from 'hooks';

const FutureTxInfo: FC = () => {
  const contractRpc = useSTETHContractRPC();
  const lidoFee = useContractSWR({
    contract: contractRpc,
    method: 'getFee',
  });

  const submitGasLimit = useStethSubmitGasLimit();
  const txCostInUsd = useTxCostInUsd(submitGasLimit);

  // TODO
  const willReceiveStEthValue = 'N';

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
