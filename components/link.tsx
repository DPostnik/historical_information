import Link from 'next/link';
import { ReactNode } from 'react';

import { ILink } from 'interfaces';

type LinkProps = {
  link: ILink;
  children: ReactNode;
};

export default function LinkComponent({ link, children }: LinkProps) {
  return (
    <Link href={link?.href || '/'} passHref={link.isExternal}>
      <a
        rel={link?.isExternal ? 'nofollow' : undefined}
        target={link?.target || '_self'}
      >
        {children}
      </a>
    </Link>
  );
}
