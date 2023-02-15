// PAY ATTENTION: Example showing how to create serverLogger with your secrets
import { serverLoggerFactory } from '@lidofinance/api-logger';
import { defaultSecrets } from '@common/utils';

// import { serverRuntimeConfig } from 'config';

// const { someValueForMasking } = serverRuntimeConfig;

// someValueForMasking && defaultSecrets.push(someValueForMasking);

// TODO: make config for 'common/utils/serverLogger'
// https://github.com/lidofinance/warehouse/tree/main/packages/api/logger
export const serverLogger = serverLoggerFactory(defaultSecrets);
