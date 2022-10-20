import { ILink } from 'interfaces';
import { ROUTES } from './routes';

export const HeaderLinks: ILink[] = [
  {
    href: ROUTES.HOME,
    label: 'home',
    isExternal: false,
  },
  {
    href: ROUTES.CUSTOM,
    label: 'custom',
    isExternal: false,
  },
  {
    href: ROUTES.NEW,
    label: 'new',
    isExternal: false,
  },
];
