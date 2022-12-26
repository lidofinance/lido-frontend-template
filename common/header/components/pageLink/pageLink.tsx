import { useRouter } from 'next/router';
import { FC } from 'react';

import LocalLink from './components/localLink';

import { PageLinkStyle } from './styles';
import { IPageLink } from './types';

const PageLink: FC<IPageLink> = (props: IPageLink) => {
  const { icon, title, href, external } = props;

  const router = useRouter();

  const queryString = new URLSearchParams(
    router.query as Record<string, string>,
  ).toString();
  const pathWithQuery = href + `${queryString ? `?${queryString}` : ''}`;

  return external ? (
    <PageLinkStyle
      href={pathWithQuery}
      active={href.indexOf(router.pathname) > -1}
    >
      <>
        {icon}
        <span>{title}</span>
      </>
    </PageLinkStyle>
  ) : (
    <LocalLink href={pathWithQuery}>
      <PageLinkStyle active={href.indexOf(router.pathname) > -1}>
        <>
          {icon}
          <span>{title}</span>
        </>
      </PageLinkStyle>
    </LocalLink>
  );
};

export default PageLink;
