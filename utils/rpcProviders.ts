import {
  providerFactory,
  StaticJsonRpcBatchProvider,
} from '@lidofinance/eth-providers';

export const getStaticRpcBatchProvider = providerFactory(
  StaticJsonRpcBatchProvider,
);
