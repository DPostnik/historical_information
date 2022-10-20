import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import Button from 'components/button/button';
import { ROUTES } from 'common/constants/routes';
import { Size } from 'enums/size';
import withTranslation from 'middlewares/withTranslation';

export default function ErrorPage() {
  const { t } = useTranslation('error');

  return (
    <>
      <div className="error-page__wrapper">
        <div className="error-page__content">
          <h1>404</h1>
          <div className={'error-page__divider'} />
          <span>{t('pageNotFound')}</span>
        </div>
        <div className="button__container">
          <Link href={ROUTES.HOME}>
            <Button size={Size.MEDIUM}>
              <a>{t('goToHomePage', { ns: 'common' })}</a>
            </Button>
          </Link>
        </div>
      </div>
      <style jsx>{`
        @import 'styles/utils/_all.scss';

        .error-page {
          &__wrapper {
            width: 100%;
            height: 80vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          &__content {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          &__divider {
            margin: 0 1rem 0 0.5rem;
            height: 3rem;
            opacity: 0.5;
            border-right: 1px solid $text-color;
          }
        }
      `}</style>
    </>
  );
}

export const getStaticProps = withTranslation('error');
