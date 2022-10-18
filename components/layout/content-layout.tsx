import React from 'react';
import { useApp } from 'common/store/app.context';
import { getTheme } from 'common/store/selectors';
import { Theme } from 'enums/Theme';

type ContentLayoutProps = {
  children?: React.ReactNode;
};

export default function ContentLayout({ children }: ContentLayoutProps) {
  const theme = useApp(getTheme);

  return (
    <>
      <div
        className={`content__wrapper ${
          theme === Theme.LIGHT ? 'light' : 'dark'
        }`}
      >
        {children}
      </div>
      <style jsx>{`
        @import 'styles/utils/_all.scss';

        .content {
          &__wrapper {
            padding: 3rem;
            min-height: 90vh;
            width: 100%;
            border: 1px solid black;
            background: linear-gradient(#e66465, #9198e5);
          }
        }
      `}</style>
    </>
  );
}
