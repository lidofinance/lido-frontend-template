import { serverLogger } from 'utilsApi';

export const parallelizePromisesServerSide = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  promises: Array<Promise<any>>,
) => {
  return Promise.allSettled(promises).then((settledResults) =>
    settledResults.map((settled) => {
      if (settled.status === 'rejected') {
        serverLogger.error(settled.reason);
      }
      return settled.status === 'fulfilled' && settled.value;
    }),
  );
};
