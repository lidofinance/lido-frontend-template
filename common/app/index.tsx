import { FC, PropsWithChildren } from 'react';
import NextApp from 'next/app';
import { CookieThemeProvider } from '@lidofinance/lido-ui';
import {
  ToastContainer,
  CookiesTooltip,
  migrationThemeCookiesToCrossDomainCookiesClientSide,
} from '@lidofinance/lido-ui';

import { GlobalStyle } from 'common/styles';
import { Web3Provider, ModalProvider } from 'common/providers';
import Header from 'common/layout/header';
import Main from 'common/layout/main';
import Footer from 'common/layout/footer';

import { AppPropsWithPages } from './types';

// Migrations old cookies to new cross domain cookies
migrationThemeCookiesToCrossDomainCookiesClientSide();

export const WidgetApp: FC<PropsWithChildren<AppPropsWithPages>> = ({
  children,
  ...props
}) => (
  <CookieThemeProvider>
    <GlobalStyle />
    <Web3Provider>
      <ModalProvider>
        <Header pages={props?.pages} />
        <Main>
          <NextApp {...props} />
          {children}
        </Main>
        <Footer />
        <CookiesTooltip />
        <ToastContainer />
      </ModalProvider>
    </Web3Provider>
  </CookieThemeProvider>
);
