import { useWeb3React } from '@web3-react/core';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';
import { useCallback } from 'react';

type UseDisconnect = () => () => void;

export const useDisconnect: UseDisconnect = () => {
  const { deactivate, connector } = useWeb3React();

  return useCallback(() => {
    deactivate();
    connector?.deactivate();

    if (connector instanceof WalletConnectConnector) connector.close();
    if (connector instanceof WalletLinkConnector) connector.close();
  }, [deactivate, connector]);
};
