import {
  providerFactory,
  StaticJsonRpcBatchProvider,
} from '@lidofinance/eth-providers';
import { trackedJsonRpcProvider } from '@lidofinance/eth-api-providers';

import { dynamics } from 'config';
import { registry } from './metrics';

export const getStaticRpcBatchProvider = providerFactory(
  trackedJsonRpcProvider({
    prefix: dynamics.metricsPrefix,
    registry,
    Provider: StaticJsonRpcBatchProvider,
  }),
);
