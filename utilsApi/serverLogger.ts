import { serverLoggerFactory } from '@lidofinance/api-logger';
import { serverRuntimeConfig } from 'config';

// PAY ATTENTION: Example showing how to create serverLogger with your secrets

const { infuraApiKey, alchemyApiKey } = serverRuntimeConfig;

export const secrets: string[] = [];

infuraApiKey && secrets.push(infuraApiKey);
alchemyApiKey && secrets.push(alchemyApiKey);

// https://github.com/lidofinance/warehouse/tree/main/packages/api/logger
export const serverLogger = serverLoggerFactory(secrets);
