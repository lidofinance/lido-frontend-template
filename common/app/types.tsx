import { AppProps } from 'next/app';
import { INavigationLink } from 'common/layout/header/components/navigation/components/navigationLink';

export type AppPropsWithPages = AppProps & { pages: INavigationLink[] };
