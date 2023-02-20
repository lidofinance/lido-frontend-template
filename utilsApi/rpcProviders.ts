import {
  providerFactory,
  StaticJsonRpcBatchProvider,
} from '@lidofinance/eth-providers';
import { trackedJsonRpcProvider } from '@lidofinance/eth-api-providers';

import { registry } from '@common/utils/metrics';
import { dynamics } from 'config';

export const getStaticRpcBatchProvider = providerFactory(
  trackedJsonRpcProvider({
    prefix: dynamics.metricsPrefix,
    registry,
    Provider: StaticJsonRpcBatchProvider,
  }),
);
