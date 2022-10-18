import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function CustomPage() {
  const { t } = useTranslation('common');
  return (
    <>
      <div className="page__wrapper">
        <div>{t('h1')}</div>
      </div>
      <style jsx>{`
        .page__wrapper {
          width: 100%;
        }
      `}</style>
    </>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
