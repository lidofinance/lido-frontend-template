import getConfig from 'next/config';
import { SWRResponse, useLidoSWR } from '@lido-sdk/react';

import { standardFetcher } from '@common/utils';

const { serverRuntimeConfig } = getConfig();
const { basePath } = serverRuntimeConfig;

// TODO: only for front ?
export const useLidoApr = (): SWRResponse<unknown> => {
  return useLidoSWR(
    `${basePath || ''}/api/steth-apr`,
    standardFetcher,
  ) as SWRResponse<unknown>;
};
