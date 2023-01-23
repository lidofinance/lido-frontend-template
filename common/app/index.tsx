import { FC, PropsWithChildren } from 'react';
import NextApp, { AppProps } from 'next/app';
import { CookieThemeProvider } from '@lidofinance/lido-ui';
import {
  ToastContainer,
  CookiesTooltip,
  migrationThemeCookiesToCrossDomainCookiesClientSide,
} from '@lidofinance/lido-ui';

import { GlobalStyle } from 'common/styles';
import { Web3Provider, ModalProvider } from 'common/providers';

// Migrations old cookies to new cross domain cookies
migrationThemeCookiesToCrossDomainCookiesClientSide();

export const WidgetApp: FC<PropsWithChildren<AppProps>> = ({
  children,
  ...props
}) => (
  <CookieThemeProvider>
    <GlobalStyle />
    <Web3Provider>
      <ModalProvider>
        <NextApp {...props} />
        {children}
        <CookiesTooltip />
        <ToastContainer />
      </ModalProvider>
    </Web3Provider>
  </CookieThemeProvider>
);
