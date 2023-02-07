import { FC, memo } from 'react';

import NavigationLink, { INavigationLink } from './components/navigationLink';
import { NavigationStyle } from './styles';
import { INavigation } from './types';

const Navigation: FC<INavigation> = memo((props: INavigation) => {
  const { pages } = props;

  if (!pages) {
    return <></>;
  }

  return (
    <NavigationStyle>
      {pages.map((pageProps: INavigationLink) => (
        <NavigationLink key={pageProps.href} {...pageProps} />
      ))}
    </NavigationStyle>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;
