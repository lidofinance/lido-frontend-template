import { FC } from 'react';
import Head from 'next/head';
import Header from 'components/header';
import Main from 'components/main';
import Footer from 'components/footer';
import ThemeToggler from 'components/themeToggler';
import { LayoutTitleStyle, LayoutSubTitleStyle } from './layoutStyles';
import { LayoutProps } from './types';

const Layout: FC<LayoutProps> = (props) => {
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
      <ThemeToggler />
    </>
  );
};

export default Layout;
