import { default as dynamics } from './dynamics';

export const getMatomoEventNameWithPrefix = (name: string) =>
  `${dynamics.matomoEventNamePrefix}${name}`;
