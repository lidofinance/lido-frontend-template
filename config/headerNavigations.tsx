import { Stake, Wrap, Ldo as LdoIcon } from '@lidofinance/lido-ui';

import { INavigationLink } from 'common/layout/header/components/navigation/components/navigationLink';

export const headerNavigations = [
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
