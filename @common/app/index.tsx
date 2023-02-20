import { FC, PropsWithChildren } from 'react';
import NextApp from 'next/app';
import { CookieThemeProvider } from '@lidofinance/lido-ui';
import {
  ToastContainer,
  CookiesTooltip,
  migrationThemeCookiesToCrossDomainCookiesClientSide,
} from '@lidofinance/lido-ui';

import { GlobalStyle } from '@common/styles';
import { Web3Provider, ModalProvider } from '@common/providers';
import Header from '@common/layout/header';
import Main from '@common/layout/main';
import Footer from '@common/layout/footer';

import { WidgetAppProps } from './types';

// Migrations old cookies to new cross domain cookies
migrationThemeCookiesToCrossDomainCookiesClientSide();

export const WidgetApp: FC<PropsWithChildren<WidgetAppProps>> = ({
  ...props
}) => (
  <CookieThemeProvider>
    <GlobalStyle />
    <Web3Provider {...props.web3}>
      <ModalProvider {...props.reefKnot}>
        <Header pages={props?.pages} />
        <Main>
          <NextApp {...props} />
        </Main>
        <Footer />
        <CookiesTooltip />
        <ToastContainer />
      </ModalProvider>
    </Web3Provider>
  </CookieThemeProvider>
);
