import getConfig from 'next/config';
export const { serverRuntimeConfig } = getConfig();

export * from './aggregator';
export * from './cache';
export { default as dynamics } from './dynamics';
export * from './matomo';
export * from './matomoClickEvents';
export * from './matomoWalletsEvents';
export * from './metrics';
export * from './oracle';
export * from './rpc';
export * from './steth';
