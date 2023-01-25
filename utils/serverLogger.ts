// PAY ATTENTION: Example showing how to create serverLogger with your secrets
// TODO: make config for 'common/utils/serverLogger'

// import getConfig from 'next/config';
import { serverLoggerFactory } from '@lidofinance/api-logger';
import { defaultSecrets } from 'common/utils';

// const { serverRuntimeConfig } = getConfig();
// const { someValueForMasking } = serverRuntimeConfig;

// someValueForMasking && defaultSecrets.push(someValueForMasking);

// https://github.com/lidofinance/warehouse/tree/main/packages/api/logger
export const serverLogger = serverLoggerFactory(defaultSecrets);
