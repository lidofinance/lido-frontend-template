import { FC } from 'react';
import { Ldo as LdoIcon, Stake, Wrap } from '@lidofinance/lido-ui';

import Header from 'common/components/header';
import { INavigationLink } from 'common/components/header/components/navigation/components/navigationLink';
import Main from 'common/components/main';
import Footer from 'common/components/footer';

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
  ] as INavigationLink[];

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
