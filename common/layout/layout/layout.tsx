import { FC } from 'react';
import { Ldo as LdoIcon, Stake, Wrap } from '@lidofinance/lido-ui';

import Header from '../header';
import { INavigationLink } from '../header/components/navigation/components/navigationLink';
import Main from '../main';
import Footer from '../footer';

import { LayoutTitleStyle, LayoutSubTitleStyle } from './styles';
import { ILayout } from './types';

// TODO: remove Layout
// TODO: move all to _app.tsx
const Layout: FC<ILayout> = (props: ILayout) => {
  const { title, subtitle, children } = props;

  // TODO: move all to _app.tsx
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
        {/* TODO: use <h1> */}
        {/* TODO: move to page component */}
        {title && <LayoutTitleStyle>{title}</LayoutTitleStyle>}
        {/* TODO: use <h2> */}
        {/* TODO: move to page component */}
        {subtitle && <LayoutSubTitleStyle>{subtitle}</LayoutSubTitleStyle>}
        {children}
      </Main>
      <Footer />
    </>
  );
};

export default Layout;
