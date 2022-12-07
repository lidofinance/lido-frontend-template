const isDev = process.env.NODE_ENV === 'development';

type LoggerData = {
  event: string;
  state?: string;
};

class Logger {
  constructor(readonly name: string) {}

  log(data: LoggerData) {
    if (isDev) {
      console.log({ logger: this.name, ...data });
    }
  }

  error(data: LoggerData, error?: Error) {
    if (isDev) {
      console.error({ logger: this.name, error, ...data });
    }
  }
}

export const transactionLogger = new Logger('transaction');
export const assertionLogger = new Logger('assertion');

export const runWithLogger = async <T>(
  logger: Logger,
  event: string,
  callback: () => Promise<T>,
): Promise<T> => {
  try {
    logger.log({ event, state: 'start' });
    const result = await callback();
    logger.log({ event, state: 'success' });

    return result;
  } catch (error) {
    if (error instanceof Error) {
      logger.error({ event, state: 'error' }, error);
    } else {
      logger.error({ event, state: 'error' });
    }
    throw error;
  }
};

export const runWithTransactionLogger = <T>(
  event: string,
  callback: () => Promise<T>,
): Promise<T> => {
  return runWithLogger(transactionLogger, event, callback);
};
