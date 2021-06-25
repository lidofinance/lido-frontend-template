import { useEffect, useRef } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useConnectorStorage } from './useConnectorStorage';
import { useConnect } from './useConnect';
import { useConfig } from './useConfig';

export const useAutoConnect = (): void => {
  const { active, connector: currentConnector } = useWeb3React();
  const connect = useConnect();
  const { connectors } = useConfig();
  const [connectorName, setConnector] = useConnectorStorage();

  useEffect(() => {
    if (!active) {
      setConnector(null);
      return;
    }

    const [connectorName] =
      Object.entries(connectors).find(
        ([, connectorObj]) => connectorObj === currentConnector,
      ) ?? [];

    if (connectorName) {
      setConnector(connectorName as keyof typeof connectors);
    }
  }, [active, connectors, currentConnector, setConnector]);

  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;

    const savedConnector = connectorName && connectors[connectorName];
    if (!savedConnector || active) return;
    connect(savedConnector);
  }, [connect, connectors, active, connectorName]);
};
