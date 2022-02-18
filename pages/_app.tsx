import { memo } from 'react';
import NextApp, { AppProps, AppContext } from 'next/app';
import { ToastContainer } from 'components/toasts';
import Providers, { EnvConfig } from 'providers';
import getConfig from 'next/config';
import { withCsp } from 'utilsAPI';
import { DefaultSeo } from 'next-seo';

import ogImage from 'public/polygon-link.png';

import { useWebsiteConfig } from 'shared/hooks';

const App = (props: AppProps): JSX.Element => {
  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
};

const MemoApp = memo(App);

const AppWrapper = (props: AppProps & { config: EnvConfig }): JSX.Element => {
  const { config, ...rest } = props;
  const siteConfig = useWebsiteConfig();
  return (
    <>
      <DefaultSeo
        title={siteConfig.title}
        description={siteConfig.description}
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          site_name: siteConfig.appName,
          description: siteConfig.description,
          url: siteConfig.url,
          images: [
            {
              url: `${siteConfig.url}${ogImage}`,
              width: 1200,
              height: 614,
              alt: 'Lido MATIC stake',
            },
          ],
        }}
      />
      <Providers config={config || {}}>
        <ToastContainer />
        <MemoApp {...rest} />
      </Providers>
    </>
  );
};

AppWrapper.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  const { publicRuntimeConfig } = getConfig();

  return { ...appProps, config: publicRuntimeConfig };
};

export default process.env.NODE_ENV === 'development'
  ? AppWrapper
  : withCsp(AppWrapper);
