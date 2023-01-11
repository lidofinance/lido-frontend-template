import { FC } from 'react';
import Head from 'next/head';

import Layout from 'common/components/layout';

const Example: FC = () => {
  return (
    <Layout title="Example Page" subtitle="Just for routing test">
      <Head>
        <title>Lido | Frontend Template</title>
      </Head>
    </Layout>
  );
};

export default Example;
