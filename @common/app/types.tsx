import { AppProps } from 'next/app';
import { ProviderWeb3Props } from '@reef-knot/web3-react';

import { INavigationLink } from '../layout/header/components/navigation/components/navigationLink';
import { ModalProviderProps } from '../providers';

export type WidgetAppProps = AppProps & {
  pages: INavigationLink[];
  web3: ProviderWeb3Props;
  reefKnot: ModalProviderProps;
};
