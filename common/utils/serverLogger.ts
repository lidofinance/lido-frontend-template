import getConfig from 'next/config';
import { serverLoggerFactory } from '@lidofinance/api-logger';

const { serverRuntimeConfig } = getConfig();
const { infuraApiKey, alchemyApiKey } = serverRuntimeConfig;

// Wallet addresses
const anyHexadecimal = new RegExp('0x[a-fA-F0-9]+', 'gi');
// Wallet ENS addresses
const anyEnsAddress = new RegExp('[a-zA-Z.]+\\.eth', 'gi');

export const defaultSecrets = [anyHexadecimal, anyEnsAddress];

infuraApiKey && defaultSecrets.push(infuraApiKey);
alchemyApiKey && defaultSecrets.push(alchemyApiKey);

// https://github.com/lidofinance/warehouse/tree/main/packages/api/logger
export const serverLogger = serverLoggerFactory(defaultSecrets);
