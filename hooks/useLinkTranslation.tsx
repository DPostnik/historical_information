import { useTranslation } from 'next-i18next';

import { ILink } from 'interfaces';

export default function useLinkTranslation(links: ILink[]) {
  const { t } = useTranslation('common');

  return links.map((link) => {
    return {
      ...link,
      label: t(`links.${link.label}`, { ns: 'common' }),
    };
  });
}
