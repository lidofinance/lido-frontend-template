import { assertionLogger } from './logger';

export class AssertionError extends Error {}

export const assert: (
  condition: unknown,
  event: string,
  errorMessage: string,
) => asserts condition = (condition, event, errorMessage) => {
  if (condition) return;

  const error = new AssertionError(errorMessage);
  assertionLogger.error({ event }, error);

  throw error;
};
