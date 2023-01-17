import { FC } from 'react';
import Head from 'next/head';
import { ServicePage } from '@lidofinance/lido-ui';

// TODO: move to common
const Page404: FC = () => (
  <ServicePage title="500">
    <Head>
      <title>Lido | Internal Server Error</title>
    </Head>
    Internal Server Error
  </ServicePage>
);

export default Page404;
