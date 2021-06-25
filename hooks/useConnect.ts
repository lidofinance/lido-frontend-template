import { useWeb3React } from '@web3-react/core';
import { AbstractConnector } from '@web3-react/abstract-connector';
import { useCallback } from 'react';

type UseConnect = () => (connector: AbstractConnector) => Promise<void>;

export const useConnect: UseConnect = () => {
  const { activate } = useWeb3React();

  return useCallback((connector) => activate(connector), [activate]);
};
