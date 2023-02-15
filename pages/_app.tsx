import { PropsWithChildren } from 'react';
import { AppProps } from 'next/app';

import {
  Stake,
  Ldo as LdoIcon,
  Wrap,
  migrationAllowCookieToCrossDomainCookieClientSide,
} from '@lidofinance/lido-ui';
import { WidgetApp } from '@common/app';
import { INavigationLink } from '@common/layout/header/components/navigation/components/navigationLink';

import { dynamics } from 'config';
import { backendRPC } from 'consts';
import { withCsp } from 'utils';

// Migrations old allow cookies to new cross domain cookies
// It is here 'cause `keyOldCookies` may be different for widgets
migrationAllowCookieToCrossDomainCookieClientSide(
  'LIDO_WIDGET__COOKIES_ALLOWED',
);

// Header pages
const headerPages = [
  {
    title: 'Stake',
    href: '/',
    icon: <Stake />,
  },
  {
    title: 'Example',
    href: '/example',
    icon: <Wrap />,
  },
  {
    title: 'Landing',
    href: 'https://lido.fi/',
    icon: <LdoIcon />,
    external: true,
  },
] as INavigationLink[];

// App wrapper
const WidgetAppWrapper = ({
  children,
  ...rest
}: PropsWithChildren<AppProps>): JSX.Element => {
  return (
    <WidgetApp
      {...rest}
      pages={headerPages}
      web3ProviderProps={{
        defaultChainId: dynamics.defaultChain,
        supportedChainIds: dynamics.supportedChains,
        rpc: backendRPC,
      }}
    >
      {children}
    </WidgetApp>
  );
};

export default process.env.NODE_ENV === 'development'
  ? WidgetAppWrapper
  : withCsp(WidgetAppWrapper);
