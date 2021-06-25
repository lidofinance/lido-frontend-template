import { FC } from 'react';
import Head from 'next/head';
import ServicePage from 'components/servicePage';

const Page404: FC = () => (
  <ServicePage title="500">
    <Head>
      <title>Lido | Internal Server Error</title>
    </Head>
    Internal Server Error
  </ServicePage>
);

export default Page404;
