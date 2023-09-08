import Axios, { CreateAxiosDefaults } from 'axios';
import { REQUEST_TIMEOUT } from 'config';

declare module 'axios' {
  export interface InternalAxiosRequestConfig {
    metadata: any;
  }
}

export const _createAxios = (config?: CreateAxiosDefaults) => {
  return Axios.create({
    timeout: REQUEST_TIMEOUT,
    ...(config ?? {}),
  });
};
