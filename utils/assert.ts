import { assertionLogger } from './logger';

export class AssertionError extends Error {}

// eslint-disable-next-line func-style
export function assert<T extends unknown>(
  condition: T,
  event: string,
  errorMessage: string,
): asserts condition {
  if (condition) return;

  const error = new AssertionError(errorMessage);
  assertionLogger.error({ event }, error);

  throw error;
}
