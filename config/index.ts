import getConfig from 'next/config';
export const { serverRuntimeConfig } = getConfig();
export { default as dynamics } from './dynamics';
export * from './rpc';
export * from './example';
export * from './metrics';
export * from './matomo';
export * from './matomoClickEvents';
export * from './matomoWalletsEvents';
