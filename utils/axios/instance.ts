// eslint-disable-next-line import/no-extraneous-dependencies
import Axios, { CreateAxiosDefaults } from 'axios';
import { REQUEST_TIMEOUT } from 'config';

declare module 'axios' {
  export interface InternalAxiosRequestConfig {
    metadata?: Record<string, unknown>;
  }
}

export const _createAxios = (config?: CreateAxiosDefaults) => {
  return Axios.create({
    timeout: REQUEST_TIMEOUT,
    ...(config ?? {}),
  });
};
