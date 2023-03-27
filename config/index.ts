import getConfig from 'next/config';
export const { serverRuntimeConfig } = getConfig();

export { default as dynamics } from './dynamics';
export * from './api';
export * from './cache';
export * from './chains';
export * from './estimate';
export * from './matomo';
export * from './matomoClickEvents';
export * from './matomoWalletsEvents';
export * from './metrics';
export * from './rpc';
export * from './steth';
export * from './texts';
export * from './units';
