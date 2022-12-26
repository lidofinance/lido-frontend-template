import { FC } from 'react';
import Link from 'next/link';
import { LidoLogo } from '@lidofinance/lido-ui';

import HeaderWallet from './components/headerWallet';
import Navigation from './components/navigation';

import { HeaderStyle, HeaderLogoStyle, HeaderActionsStyle } from './styles';
import { IHeader } from './types';

const Header: FC<IHeader> = (props: IHeader) => {
  const { pages } = props;

  return (
    <HeaderStyle size="full" forwardedAs="header">
      <HeaderLogoStyle>
        <Link href="/">
          <LidoLogo />
        </Link>
      </HeaderLogoStyle>
      <Navigation pages={pages} />
      <HeaderActionsStyle>
        <HeaderWallet />
      </HeaderActionsStyle>
    </HeaderStyle>
  );
};

export default Header;
