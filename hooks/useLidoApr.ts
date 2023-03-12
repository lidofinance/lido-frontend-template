import { SWRResponse, useLidoSWR } from '@lido-sdk/react';
import { standardFetcher } from '@lidofinance/ui-primitives';

import { serverRuntimeConfig } from 'config';

const { basePath } = serverRuntimeConfig;

export const useLidoApr = (): SWRResponse<unknown> => {
  return useLidoSWR(
    `${basePath || ''}/api/steth-apr`,
    standardFetcher,
  ) as SWRResponse<unknown>;
};
