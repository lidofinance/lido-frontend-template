import { toastEthereumError } from 'components/toasts';
import {
  default as useSWRSource,
  SWRResponse as SWRResponseSource,
  SWRConfiguration,
} from 'swr';
import { Key, Fetcher } from 'swr/dist/types';

export type SWRResponse<Data, Error = unknown> = SWRResponseSource<
  Data,
  Error
> & {
  initialLoading: boolean;
};

export const useSWR = <Data = unknown, Error = unknown>(
  key: Key,
  fetcher: Fetcher<Data> | null,
  config?: SWRConfiguration<Data, Error>,
): SWRResponse<Data, Error> => {
  const result = useSWRSource(key, fetcher, {
    onError: (error) => {
      console.error(error);
      toastEthereumError();
    },
    errorRetryInterval: 10_000,
    focusThrottleInterval: 10_000,
    ...config,
  });

  const initialLoading = result.data == null && result.isValidating;

  return {
    ...result,
    initialLoading,
  };
};
