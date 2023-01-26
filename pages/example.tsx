import { FC } from 'react';
import Head from 'next/head';
import { LayoutSubTitleStyle, LayoutTitleStyle } from 'common/layout/styles';

// PAY ATTENTION: Example showing how to add page (and for routing test)
const Example: FC = () => {
  return (
    <>
      <Head>
        <title>Lido | Frontend Template | Example Page</title>
      </Head>

      <LayoutTitleStyle>Example Page</LayoutTitleStyle>
      <LayoutSubTitleStyle>Just for routing test</LayoutSubTitleStyle>
    </>
  );
};

export default Example;
