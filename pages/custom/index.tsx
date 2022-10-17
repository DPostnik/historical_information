import styles from './custom.module.scss';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function CustomPage() {
  const { t } = useTranslation('common');
  return <div className={styles.wrapper}>{t('h1')}</div>;
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
