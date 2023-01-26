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

const WidgetAppWrapper = (props: AppProps): JSX.Element => {
  const appPropsWithPages = { pages: headerNavigations, ...props };

  return (
    <WidgetApp {...appPropsWithPages}>
      {/* PAY ATTENTION: Extra components can be added here */}
    </WidgetApp>
  );
};

export default process.env.NODE_ENV === 'development'
  ? WidgetAppWrapper
  : withCsp(WidgetAppWrapper);
