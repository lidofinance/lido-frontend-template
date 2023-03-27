import { SWRResponse, useLidoSWR } from '@lido-sdk/react';
import { serverRuntimeConfig } from 'config';
import { swrFetcher } from 'utils';

const { basePath } = serverRuntimeConfig;

export const useLidoApr = (): SWRResponse<unknown> => {
  return useLidoSWR(`${basePath || ''}/api/steth-apr`, swrFetcher);
};
