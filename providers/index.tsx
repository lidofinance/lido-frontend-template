import { FC } from 'react';
import ConfigProvider, { ConfigProviderProps } from './config';
import EthProvider from './eth';
import ModalProvider from './modals';
import ThemeProvider from './theme';
import TokensProvider from './tokens';
import Web3AppProvider from './web3';

const Providers: FC<ConfigProviderProps> = ({ config, children }) => (
  <ConfigProvider config={config}>
    <ThemeProvider>
      <Web3AppProvider>
        <EthProvider>
          <TokensProvider>
            <ModalProvider>{children}</ModalProvider>
          </TokensProvider>
        </EthProvider>
      </Web3AppProvider>
    </ThemeProvider>
  </ConfigProvider>
);

export default Providers;

export * from './config';
export * from './eth';
export * from './modals';
export * from './theme';
export * from './tokens';
export * from './web3';
