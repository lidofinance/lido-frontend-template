// eslint-disable-next-line import/no-extraneous-dependencies
import { AxiosError, CreateAxiosDefaults } from 'axios';
import { _createAxios } from './instance';
import { InternalAxiosError } from './internalAxiosError';

const errorHandler = (error: AxiosError) => {
  return Promise.reject(new InternalAxiosError(error));
};

export const createClientAxios = (axiosConfig?: CreateAxiosDefaults) => {
  const instance = _createAxios(axiosConfig);

  instance.interceptors.request.use(null, errorHandler);
  instance.interceptors.response.use(null, errorHandler);

  return instance;
};

export const clientAxios = createClientAxios();
