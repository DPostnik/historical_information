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
