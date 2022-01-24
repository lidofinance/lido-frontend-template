import maskString from '@darkobits/mask-string';
import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();
const { infuraApiKey, alchemyApiKey } = serverRuntimeConfig;

const anyHex = new RegExp('0x[a-fA-F0-9]+', 'ig');
const anyEnsAddress = new RegExp('[a-zA-Z.]+\\.eth', 'ig');

const mask = (message: string): string =>
  maskString(
    [infuraApiKey, alchemyApiKey, anyHex, anyEnsAddress].filter(Boolean),
    message,
  );

enum LEVEL {
  error = 'error',
  warn = 'warn',
  info = 'info',
  debug = 'debug',
}

const stringify = (data: unknown) => {
  let stringified = JSON.stringify(data);

  if (data instanceof Error) {
    // extract Error's non-enumerable props before stringifying
    stringified = JSON.stringify({
      message: data.message,
      stack: data.stack,
    });
  }

  return stringified;
};

const log =
  (level: LEVEL) =>
  (...output: unknown[]): void => {
    try {
      console[level](
        ...JSON.parse(mask(JSON.stringify(output.map(stringify)))),
      );
    } catch {
      console.warn('Failed to sanitize output');
    }
  };

export const serverLogger =
  process.env.NODE_ENV === 'production'
    ? {
        error: log(LEVEL.error),
        warn: log(LEVEL.warn),
        info: log(LEVEL.info),
        debug: log(LEVEL.debug),
        log: log(LEVEL.debug),
      }
    : console;
