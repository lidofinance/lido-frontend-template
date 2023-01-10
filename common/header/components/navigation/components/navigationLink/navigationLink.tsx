import { FC } from 'react';
import { useRouter } from 'next/router';

import LocalLink from 'common/localLink';

import { NavigationLinkStyle } from './styles';
import { INavigationLink } from './types';

const NavigationLink: FC<INavigationLink> = (props: INavigationLink) => {
  const { icon, title, href, external } = props;

  const router = useRouter();

  const queryString = new URLSearchParams(
    router.query as Record<string, string>,
  ).toString();
  const pathWithQuery = href + `${queryString ? `?${queryString}` : ''}`;

  return external ? (
    <NavigationLinkStyle href={pathWithQuery} active={router.pathname === href}>
      {icon}
      <span>{title}</span>
    </NavigationLinkStyle>
  ) : (
    // Fix hydration error https://github.com/vercel/next.js/issues/42358#issuecomment-1307230409
    <LocalLink href={pathWithQuery} passHref legacyBehavior>
      <NavigationLinkStyle active={router.pathname === href}>
        {icon}
        <span>{title}</span>
      </NavigationLinkStyle>
    </LocalLink>
  );
};

export default NavigationLink;
