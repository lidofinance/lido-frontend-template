import { memo } from 'react';
import NextApp, { AppProps, AppContext } from 'next/app';
import { ToastContainer } from '@lidofinance/lido-ui';
import Providers from 'providers';
import getConfig from 'next/config';
import { CustomAppProps } from 'types';
import { withCsp } from 'utils/withCsp';

const App = (props: AppProps): JSX.Element => {
  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
};

const MemoApp = memo(App);

const AppWrapper = (props: CustomAppProps): JSX.Element => {
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

export default process.env.NODE_ENV === 'development'
  ? AppWrapper
  : withCsp(AppWrapper);
