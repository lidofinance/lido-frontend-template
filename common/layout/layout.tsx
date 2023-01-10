import { FC } from 'react';
import { Ldo as LdoIcon, Stake, Wrap } from '@lidofinance/lido-ui';

import Header from 'common/header';
import { IPageLink } from 'common/header/components/pageLink';
import Main from 'common/main';
import Footer from 'common/footer';

import { LayoutTitleStyle, LayoutSubTitleStyle } from './styles';
import { ILayout } from './types';

const Layout: FC<ILayout> = (props: ILayout) => {
  const { title, subtitle, children } = props;

  const pages = [
    {
      title: 'Stake',
      href: '/',
      icon: <Stake />,
    },
    {
      title: 'Example',
      href: '/example',
      icon: <Wrap />,
    },
    {
      title: 'Landing',
      href: 'https://lido.fi/',
      icon: <LdoIcon />,
      external: true,
    },
  ] as IPageLink[];

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
