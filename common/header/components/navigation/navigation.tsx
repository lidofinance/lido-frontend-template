import { FC, memo, useId } from 'react';
import { Nav } from './styles';

import PageLink, { IPageLink } from '../pageLink';
import { INavigation } from './types';

const Navigation: FC<INavigation> = memo((props: INavigation) => {
  const { pages } = props;

  const id = useId();

  if (!pages) {
    return <></>;
  }

  return (
    <Nav>
      {pages.map((pageProps: IPageLink, index: number) => (
        <PageLink key={`${id}-${index}`} {...pageProps} />
      ))}
    </Nav>
  );
});

// TODO: ???
Navigation.displayName = 'Navigation';

export default Navigation;
