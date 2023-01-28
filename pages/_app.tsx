import { PropsWithChildren } from 'react';
import { AppProps } from 'next/app';

import { migrationAllowCookieToCrossDomainCookieClientSide } from '@lidofinance/lido-ui';

import { WidgetApp } from 'common/app';
import { headerNavigations } from 'config';
import { withCsp } from 'utils';

// Migrations old allow cookies to new cross domain cookies
// It is here 'cause `keyOldCookies` may be different for widgets
migrationAllowCookieToCrossDomainCookieClientSide(
  'LIDO_WIDGET__COOKIES_ALLOWED',
);

const WidgetAppWrapper = ({
  children,
  ...rest
}: PropsWithChildren<AppProps>): JSX.Element => {
  return (
    <WidgetApp {...rest} pages={headerNavigations}>
      {children}
    </WidgetApp>
  );
};

export default process.env.NODE_ENV === 'development'
  ? WidgetAppWrapper
  : withCsp(WidgetAppWrapper);
