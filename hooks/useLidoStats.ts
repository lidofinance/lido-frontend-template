import { useMemo } from 'react';
import { useSDK, useLidoSWR } from '@lido-sdk/react';
import { DATA_UNAVAILABLE } from '@lidofinance/ui-primitives';
import { serverRuntimeConfig } from 'config';
import { swrFetcher } from 'utils';

const { basePath } = serverRuntimeConfig;

type ResponseData = {
  uniqueAnytimeHolders: string;
  uniqueHolders: string;
  totalStaked: string;
  marketCap: number;
};

type UseLidoStatsType = {
  data: {
    totalStaked: string;
    stakers: string;
    marketCap: string;
  };
  initialLoading: boolean;
};

export const useLidoStats = (): UseLidoStatsType => {
  const { chainId } = useSDK();
  const lidoStats = useLidoSWR<ResponseData>(
    `${basePath || ''}api/mock-lido-stats?chainId=${chainId}`,
    swrFetcher,
  );

  const data = useMemo(() => {
    return {
      totalStaked: lidoStats?.data?.totalStaked
        ? `${Number(lidoStats.data.totalStaked).toLocaleString('en-US')} ETH`
        : DATA_UNAVAILABLE,

      stakers: lidoStats?.data?.uniqueAnytimeHolders
        ? String(lidoStats.data.uniqueAnytimeHolders)
        : DATA_UNAVAILABLE,

      marketCap: lidoStats?.data?.marketCap
        ? `$${Math.round(lidoStats.data.marketCap).toLocaleString('en-US')}`
        : DATA_UNAVAILABLE,
    };
  }, [lidoStats]);

  return {
    data,
    initialLoading: lidoStats.initialLoading,
  };
};
