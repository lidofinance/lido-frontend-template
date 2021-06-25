import { STORAGE_CONNECTOR_KEY } from 'config';
import { useLocalStorage } from 'hooks';
import { ConfigContextValue } from 'providers';
import { Dispatch, SetStateAction } from 'react';

type Connector = keyof ConfigContextValue['connectors'];

export const useConnectorStorage = (): [
  storedValue: Connector | null,
  setValue: Dispatch<SetStateAction<Connector | null>>,
] => {
  return useLocalStorage<Connector | null>(STORAGE_CONNECTOR_KEY, null);
};
