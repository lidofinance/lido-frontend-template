import { FC, PropsWithChildren } from 'react';
import { getConnectors } from 'reef-knot/core-react';
import getConfig from 'next/config';
import { WagmiConfig, configureChains, createClient } from 'wagmi';
import * as wagmiChains from 'wagmi/chains';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';

import dynamics from 'config/dynamics';
import { backendRPC, getBackendRPCPath } from 'config';

const { publicRuntimeConfig } = getConfig();

const supportedChains = Object.values(wagmiChains).filter((chain) =>
  dynamics.supportedChains.includes(chain.id),
);

const connectors = getConnectors({
  rpc: backendRPC,
  walletconnectProjectId: publicRuntimeConfig.walletconnectProjectId,
});

const { provider, webSocketProvider } = configureChains(supportedChains, [
  jsonRpcProvider({
    rpc: (chain) => ({
      http: getBackendRPCPath(chain.id),
    }),
  }),
]);

const client = createClient({
  connectors,
  autoConnect: true,
  provider,
  webSocketProvider,
});

export const AppWagmiConfig: FC<PropsWithChildren> = ({ children }) => (
  <WagmiConfig client={client}>{children}</WagmiConfig>
);
