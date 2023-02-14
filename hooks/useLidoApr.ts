import getConfig from 'next/config';
import { SWRResponse, useLidoSWR } from '@lido-sdk/react';

import { standardFetcher } from '@common/utils';

// TODO
const { serverRuntimeConfig } = getConfig();
const { basePath } = serverRuntimeConfig;

export const useLidoApr = (): SWRResponse<unknown> => {
  return useLidoSWR(
    `${basePath || ''}/api/steth-apr`,
    standardFetcher,
  ) as SWRResponse<unknown>;
};
