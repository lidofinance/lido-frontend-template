// eslint-disable-next-line import/no-extraneous-dependencies
import { CreateAxiosDefaults } from 'axios';
import { getStatusLabel } from '@lidofinance/api-metrics';
import { _createAxios, InternalAxiosError } from 'utils';
import {
  requestsTimingOutgoingCompleted,
  requestsCounterOutgoingFailed,
  requestsCounterOutgoingSent,
} from './metrics';

export const createServerAxios = (axiosConfig?: CreateAxiosDefaults) => {
  const instance = _createAxios(axiosConfig);

  instance.interceptors.request.use(
    (config) => {
      const requestURL = config.url;
      if (requestURL == null) {
        return config;
      }

      const hostname = new URL(requestURL).hostname;
      requestsCounterOutgoingSent.labels({ hostname }).inc();

      config.metadata ??= {};
      config.metadata.startTime = Date.now();
      return config;
    },
    (error) => {
      return Promise.reject(new InternalAxiosError(error));
    },
  );

  instance.interceptors.response.use(
    (response) => {
      const requestURL = response.config.url;
      if (requestURL == null) {
        return response;
      }

      const startTime = response.config.metadata.startTime;
      if (startTime == null) {
        return response;
      }

      const endTime = Date.now();
      const hostname = new URL(requestURL).hostname;
      const status = getStatusLabel(response.status);
      requestsTimingOutgoingCompleted
        .labels({ status, hostname })
        .observe((endTime - startTime) / 1000);
      return response;
    },
    (error) => {
      const requestURL = error.config.url;
      if (requestURL == null) {
        // looks like this is not an axios error
        return Promise.reject(error);
      }
      const hostname = new URL(requestURL).hostname;
      requestsCounterOutgoingFailed
        .labels({ hostname, reason: error.code })
        .inc();
      return Promise.reject(new InternalAxiosError(error));
    },
  );

  return instance;
};

export const serverAxios = createServerAxios();
