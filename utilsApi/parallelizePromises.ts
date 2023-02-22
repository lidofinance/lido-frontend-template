import { serverLogger } from 'utilsApi';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const parallelizePromises = (promises: Array<Promise<any>>) => {
  return Promise.allSettled(promises).then((settledResults) =>
    settledResults.map((settled) => {
      if (settled.status === 'rejected') {
        serverLogger.error(settled.reason);
      }
      return settled.status === 'fulfilled' && settled.value;
    }),
  );
};
