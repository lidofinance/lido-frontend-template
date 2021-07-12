import { memo } from 'react';
import NextApp, { AppProps, AppContext } from 'next/app';
import { ToastContainer } from 'components/toasts';
import Providers, { EnvConfig } from 'providers';
import getConfig from 'next/config';

const App = (props: AppProps): JSX.Element => {
  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
};

const MemoApp = memo(App);

const AppWrapper = (props: AppProps & { config: EnvConfig }): JSX.Element => {
  const { config, ...rest } = props;

  return (
    <Providers config={config || {}}>
      <ToastContainer />
      <MemoApp {...rest} />
    </Providers>
  );
};

AppWrapper.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  const { publicRuntimeConfig } = getConfig();

  return { ...appProps, config: publicRuntimeConfig };
};

export default AppWrapper;
