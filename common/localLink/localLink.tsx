import React, { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { LocalLinkProps } from './types';

const LocalLink: FC<React.PropsWithChildren<LocalLinkProps>> = (props) => {
  const router = useRouter();
  const { ref, embed } = router.query;

  const { href, ...restProps } = props;

  const extraQuery = {} as { [key: string]: string | string[] };
  if (ref) extraQuery.ref = ref;
  if (embed) extraQuery.embed = embed;

  return <Link {...restProps} href={{ pathname: href, query: extraQuery }} />;
};

export default LocalLink;
