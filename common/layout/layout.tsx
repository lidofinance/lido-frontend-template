import { FC } from 'react';

import Header from 'common/header';
import Main from 'common/main';
import Footer from 'common/footer';

import { LayoutTitleStyle, LayoutSubTitleStyle } from './styles';
import { ILayout } from './types';

const Layout: FC<ILayout> = (props: ILayout) => {
  const { title, subtitle, pages, children } = props;

  return (
    <>
      <Header pages={pages} />
      <Main>
        {title && <LayoutTitleStyle>{title}</LayoutTitleStyle>}
        {subtitle && <LayoutSubTitleStyle>{subtitle}</LayoutSubTitleStyle>}
        {children}
      </Main>
      <Footer />
    </>
  );
};

export default Layout;
