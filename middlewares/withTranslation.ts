import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function withTranslation(namespace?: string, handler?: any) {
  return (async ({ locale }: { locale: string }) => {
    return {
      props: {
        ...(await serverSideTranslations(locale, ['common', namespace || ''])),
      },
    };
  }) as GetServerSideProps;
}
