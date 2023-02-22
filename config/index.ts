import getConfig from 'next/config';
export const { serverRuntimeConfig } = getConfig();

export { default as dynamics } from './dynamics';
export * from './matomo';
export * from './matomoClickEvents';
export * from './matomoWalletsEvents';
export * from './metrics';
