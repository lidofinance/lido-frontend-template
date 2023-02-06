import { FC, memo, useId } from 'react';

import NavigationLink, { INavigationLink } from './components/navigationLink';
import { NavigationStyle } from './styles';
import { INavigation } from './types';

const Navigation: FC<INavigation> = memo((props: INavigation) => {
  const { pages } = props;

  const id = useId();

  if (!pages) {
    return <></>;
  }

  return (
    <NavigationStyle>
      {pages.map((pageProps: INavigationLink, index: number) => (
        <NavigationLink key={`${id}-${index}`} {...pageProps} />
      ))}
    </NavigationStyle>
  );
});

// TODO: ???
Navigation.displayName = 'Navigation';

export default Navigation;
