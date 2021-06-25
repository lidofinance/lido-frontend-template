import { useContext } from 'react';
import { EthContext, EthContextValue } from 'providers';

export const useEth = (): EthContextValue => {
  return useContext(EthContext);
};
