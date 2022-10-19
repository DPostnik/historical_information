import React from 'react';
import Header from './header';
import Footer from './footer';
import ContentLayout from './content-layout';
import { useApp } from 'common/store/app.context';
import { getTheme } from 'common/store/selectors';
import { Theme } from 'enums/Theme';

type LayoutProps = {
  children: React.ReactNode;
};
export default function Layout({ children }: LayoutProps) {
  const theme = useApp(getTheme);

  return (
    <>
      <div
        className={`layout__wrapper  ${
          theme === Theme.LIGHT ? 'light' : 'dark'
        }`}
      >
        <Header />
        <ContentLayout>{children}</ContentLayout>
        <Footer />
      </div>

      <style jsx>{`
        @import 'styles/utils/_all.scss';

        .layout {
          &__wrapper {
            min-height: 100vh;
            width: 100vw;
            display: flex;
            flex-direction: column;
            background-color: $background-color;
          }
        }
      `}</style>
    </>
  );
}
