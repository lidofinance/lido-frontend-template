import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { ServicePage } from '@lidofinance/lido-ui';

const PageError: FC<{ title: string; content: ReactNode }> = ({
  title,
  content,
}) => (
  <ServicePage title={title}>
    <Head>
      <title>Lido | Page Not Found</title>
    </Head>
    {content}
  </ServicePage>
);

export default PageError;
