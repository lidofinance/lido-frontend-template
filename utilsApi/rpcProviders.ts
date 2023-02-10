import {
  providerFactory,
  StaticJsonRpcBatchProvider,
} from '@lidofinance/eth-providers';
import { trackedJsonRpcProvider } from '@lidofinance/eth-api-providers';

import { registry } from '@common/utils/metrics';
import { METRICS_PREFIX } from 'config';

export const getStaticRpcBatchProvider = providerFactory(
  trackedJsonRpcProvider({
    prefix: METRICS_PREFIX,
    registry,
    Provider: StaticJsonRpcBatchProvider,
  }),
);
