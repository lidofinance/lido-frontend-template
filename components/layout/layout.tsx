import { FC, PropsWithChildren } from 'react';
import Head from 'next/head';
import Header from 'components/header';
import Main from 'components/main';
import Footer from 'components/footer';
import { LayoutTitleStyle, LayoutSubTitleStyle } from './layoutStyles';
import { LayoutProps } from './types';

const Layout: FC<PropsWithChildren<LayoutProps>> = (props) => {
  const { title, subtitle } = props;
  const { children } = props;

  return (
    <>
      <Head>
        <meta name="description" content="Lido Template" />
      </Head>
      <Header />
      <Main>
        <LayoutTitleStyle>{title}</LayoutTitleStyle>
        <LayoutSubTitleStyle>{subtitle}</LayoutSubTitleStyle>
        {children}
      </Main>
      <Footer />
    </>
  );
};

export default Layout;
