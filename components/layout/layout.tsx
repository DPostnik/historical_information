import React from 'react';

import { useApp, selectors } from 'common/store/app.context';
import { Theme } from 'enums/theme';
import ContentLayout from './content-layout';
import Header from './header';
import Footer from './footer';

type LayoutProps = {
  children: React.ReactNode;
};
export default function Layout({ children }: LayoutProps) {
  const theme = useApp(selectors.getTheme);

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
