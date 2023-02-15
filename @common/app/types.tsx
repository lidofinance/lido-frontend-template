import { AppProps } from 'next/app';

import { INavigationLink } from '../layout/header/components/navigation/components/navigationLink';
import { Web3ProviderProps } from '../providers';

export type WidgetAppProps = AppProps & {
  pages: INavigationLink[];
  web3ProviderConfig: Web3ProviderProps;
};
