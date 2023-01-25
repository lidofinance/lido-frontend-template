import { FC } from 'react';

import {
  useContractSWR,
  useSTETHContractRPC,
  useLidoSWR,
} from '@lido-sdk/react';
import { Block, DataTable, DataTableRow } from '@lidofinance/lido-ui';

import { standardFetcher } from 'common/utils';

const Statistics: FC = () => {
  const contractRpc = useSTETHContractRPC();
  const tokenName = useContractSWR({
    contract: contractRpc,
    method: 'name',
  });

  const { data } = useLidoSWR<number>('/api/oneinch-rate', standardFetcher);
  const oneInchRate = data ? (100 - (1 / data) * 100).toFixed(2) : 1;

  return (
    <Block>
      {/* TODO: get more statistics, for example get from stake.lido.fi */}
      <DataTable>
        <DataTableRow title="Token name" loading={tokenName.initialLoading}>
          {tokenName.data}
        </DataTableRow>
        <DataTableRow title="1inch rate" loading={tokenName.initialLoading}>
          {oneInchRate}
        </DataTableRow>
      </DataTable>
    </Block>
  );
};

export default Statistics;
