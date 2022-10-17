import React from 'react';

type ContentLayoutProps = {
  children?: React.ReactNode;
};

export default function ContentLayout({ children }: ContentLayoutProps) {
  return (
    <>
      <div className="content__wrapper">{children}</div>
      <style jsx>{`
        .content {
          &__wrapper {
            min-height: 80vh;
            width: 100%;
            border: 1px solid black;
            background: linear-gradient(#e66465, #9198e5);
          }
        }
      `}</style>
    </>
  );
}
