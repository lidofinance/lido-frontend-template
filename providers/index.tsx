import { FC } from 'react';

import ModalProvider from './modals';
import ThemeProvider from './theme';
import Web3Provider, { Web3ProviderProps } from './web3';

const Providers: FC<Web3ProviderProps> = ({ config, children }) => (
  <ThemeProvider>
    <Web3Provider config={config}>
      <ModalProvider>{children}</ModalProvider>
    </Web3Provider>
  </ThemeProvider>
);

export default Providers;

export * from './modals';
export * from './theme';
export * from './web3';
