import { FC } from 'react';

import {
  Block,
  DataTable,
  DataTableRow,
  Tooltip,
  Question,
} from '@lidofinance/lido-ui';
import { useContractSWR, useSTETHContractRPC } from '@lido-sdk/react';

import { DATA_UNAVAILABLE } from '@common/texts';

import { useLidoApr, useLidoStats } from 'hooks';
import { LIDO_APR_TOOLTIP_TEXT } from 'texts';

import { FlexCenterVertical } from './styles';

const LidoStatistics: FC = () => {
  const contractRpc = useSTETHContractRPC();
  const tokenName = useContractSWR({
    contract: contractRpc,
    method: 'name',
  });

  const lidoApr = useLidoApr();
  const lidoStats = useLidoStats();

  return (
    <Block>
      <DataTable>
        <DataTableRow title="Token name" loading={tokenName.initialLoading}>
          {tokenName.data}
        </DataTableRow>

        <DataTableRow
          title={
            <FlexCenterVertical>
              Annual percentage rate
              <Tooltip title={LIDO_APR_TOOLTIP_TEXT}>
                <Question />
              </Tooltip>
            </FlexCenterVertical>
          }
          loading={lidoApr.initialLoading}
          highlight
        >
          {lidoApr.data ? `${lidoApr.data}%` : DATA_UNAVAILABLE}
        </DataTableRow>

        <DataTableRow
          title="Total staked with Lido"
          loading={lidoStats.initialLoading}
        >
          {lidoStats.data.totalStaked}
        </DataTableRow>

        <DataTableRow title="Stakers" loading={lidoStats.initialLoading}>
          {lidoStats.data.stakers}
        </DataTableRow>

        <DataTableRow
          title="stETH market cap"
          loading={lidoStats.initialLoading}
        >
          {lidoStats.data.marketCap}
        </DataTableRow>
      </DataTable>
    </Block>
  );
};

export default LidoStatistics;
