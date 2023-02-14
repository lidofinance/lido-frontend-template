import { useMemo } from 'react';
import getConfig from 'next/config';
import { useSDK, useLidoSWR } from '@lido-sdk/react';
import { DATA_UNAVAILABLE } from '@common/texts';
import { standardFetcher } from '@common/utils';

const { serverRuntimeConfig } = getConfig();
const { basePath } = serverRuntimeConfig;

export type ResponseData = {
  uniqueAnytimeHolders: string;
  uniqueHolders: string;
  totalStaked: string;
  marketCap: number;
};

// TODO: only for front ?
export const useLidoStats = (): {
  data: {
    totalStaked: string;
    stakers: string;
    marketCap: string;
  };
  initialLoading: boolean;
} => {
  const { chainId } = useSDK();
  const lidoStats = useLidoSWR<ResponseData>(
    `${basePath || ''}api/short-lido-stats?chainId=${chainId}`,
    standardFetcher,
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
