// eslint-disable-next-line import/no-extraneous-dependencies
import { AxiosError } from 'axios';

export class InternalAxiosError extends Error {
  /*
   * We must not add error as public property,
   * otherwise logs will have all info about request & response,
   * which will bloat logs on grafana with useless information.
   */
  constructor(error: AxiosError) {
    super(
      `Request ${error.config?.method} to ${error.config?.url} failed: ${error.status} <${error.code}>`,
    );
  }
}
