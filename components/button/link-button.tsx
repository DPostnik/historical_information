import { ReactNode } from 'react';
import Link from 'next/link';

import { Size } from 'enums/size';

import Button from './button';

type ButtonProps = {
  children: ReactNode;
  size: Size;
  href: string;
};

export default function LinkButton({ children, size, href }: ButtonProps) {
  return (
    <Link href={href}>
      <a>
        <Button size={size}>{children}</Button>
      </a>
    </Link>
  );
}
