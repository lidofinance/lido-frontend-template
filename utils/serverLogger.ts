import maskString from '@darkobits/mask-string';

// match any terra address except before 'contracts/'
const userAddress = new RegExp('(?<!contracts/)terra[a-z0-9]+', 'gi');
// match quiknode token, i.e. any alphanumeric characters after 'quiknode.pro/'
const quikNodeToken = new RegExp('(?<=quiknode.pro/)[a-z0-9]+', 'gi');

const mask = (message: string): string =>
  maskString([userAddress, quikNodeToken], message);

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

const sanitize = (output: unknown[]) =>
  JSON.parse(mask(JSON.stringify(output.map(stringify))));

const log =
  (level: LEVEL) =>
  (...output: unknown[]): void => {
    try {
      console[level](sanitize(output));
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
