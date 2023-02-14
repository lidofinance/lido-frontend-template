import { serverLogger } from '@common/utils/serverLogger';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const parallelizePromises = (promises: Array<Promise<any>>) => {
  return Promise.allSettled(promises).then((settledResults) =>
    settledResults.map((settled) => {
      // TODO: add error handler, think about error in parallel requests
      // if (settled.status === 'rejected') throw new Error(settled.reason);
      if (settled.status === 'rejected') serverLogger.error(settled.reason);
      return settled.status === 'fulfilled' && settled.value;
    }),
  );
};
