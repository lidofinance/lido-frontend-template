import getConfig from 'next/config';
import maskString from '@darkobits/mask-string';

const { serverRuntimeConfig } = getConfig();
const { infuraApiKey, alchemyApiKey } = serverRuntimeConfig;

const anyHexadecimal = new RegExp('0x[a-fA-F0-9]+', 'gi');
const anyEnsAddress = new RegExp('[a-zA-Z.]+\\.eth', 'gi');

const secrets: (RegExp | string)[] = [
  infuraApiKey,
  alchemyApiKey,
  anyHexadecimal,
  anyEnsAddress,
].filter(Boolean);

// TODO: warehouse???
const mask = (message: string): string => maskString(secrets, message);

enum LEVEL {
  error = 'error',
  warn = 'warn',
  info = 'info',
  debug = 'debug',
}

// TODO: warehouse???
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

// TODO: warehouse???
const sanitize = (output: unknown[]) =>
  JSON.parse(mask(JSON.stringify(output.map(stringify))));

// TODO: warehouse???
const log =
  (level: LEVEL) =>
  (...output: unknown[]): void => {
    try {
      console[level](sanitize(output));
    } catch {
      console.warn('Failed to sanitize output');
    }
  };

// TODO: warehouse???
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
