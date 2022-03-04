import { FC } from 'react';

import ModalProvider from './modals';
import ThemeProvider, { ThemeName } from './theme';
import Web3Provider, { Web3ProviderProps } from './web3';

type Props = Web3ProviderProps & {
  cookiesAutoThemeScheme?: ThemeName;
  cookiesManualThemeScheme?: ThemeName;
};

const Providers: FC<Props> = ({
  cookiesAutoThemeScheme,
  cookiesManualThemeScheme,
  config,
  children,
}) => (
  <ThemeProvider
    cookiesAutoThemeScheme={cookiesAutoThemeScheme}
    cookiesManualThemeScheme={cookiesManualThemeScheme}
  >
    <Web3Provider config={config}>
      <ModalProvider>{children}</ModalProvider>
    </Web3Provider>
  </ThemeProvider>
);

export default Providers;

export * from './modals';
export * from './theme';
export * from './web3';
