import { useContext } from 'react';
import { ConfigContext, ConfigContextValue } from 'providers';

export const useConfig = (): ConfigContextValue => {
  return useContext(ConfigContext);
};
