import React, { FC } from 'react';
import { useRouter } from 'next/router';
import Link, { LinkProps } from 'next/link';

const LocalLink: FC<React.PropsWithChildren<LinkProps>> = (props) => {
  const router = useRouter();
  const { ref, embed } = router.query;

  const { href, ...restProps } = props;

  const extraQuery = {} as { [key: string]: string | string[] };
  if (ref) extraQuery.ref = ref;
  if (embed) extraQuery.embed = embed;

  if (typeof href === 'string') {
    return <Link {...restProps} href={{ pathname: href, query: extraQuery }} />;
  }

  // TODO: figure out types
  // if (typeof href === 'object') {
  //   const { query, ...restHref } = href;

  //   return (
  //     <Link
  //       {...restProps}
  //       href={{ ...restHref, query: { ...extraQuery, ...query } }}
  //     />
  //   );
  // }

  throw new Error('Prop href is not compatible');
};

export default LocalLink;
