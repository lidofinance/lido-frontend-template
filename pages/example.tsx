import { FC } from 'react';
import Head from 'next/head';
import { LayoutSubTitle, LayoutTitle } from 'common/layout/styles';

// PAY ATTENTION: Example showing how to add page (and for routing test)
const Example: FC = () => {
  return (
    <>
      <Head>
        <title>Lido | Frontend Template | Example Page</title>
      </Head>

      <LayoutTitle>Example Page</LayoutTitle>
      <LayoutSubTitle>Just for routing test</LayoutSubTitle>
    </>
  );
};

export default Example;
