import getConfig from 'next/config';
import { serverLoggerFactory } from '@lidofinance/api-logger';

const { serverRuntimeConfig } = getConfig();
const { infuraApiKey, alchemyApiKey } = serverRuntimeConfig;

export const defaultSecrets: string[] = [];

infuraApiKey && defaultSecrets.push(infuraApiKey);
alchemyApiKey && defaultSecrets.push(alchemyApiKey);

// https://github.com/lidofinance/warehouse/tree/main/packages/api/logger
export const serverLogger = serverLoggerFactory(defaultSecrets);
