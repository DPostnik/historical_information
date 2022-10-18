import React from 'react';
import Header from './header';
import Footer from './footer';
import ContentLayout from './content-layout';

type LayoutProps = {
  children: React.ReactNode;
};
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="layout__wrapper">
        <Header />
        <ContentLayout>{children}</ContentLayout>
        <Footer />
      </div>

      <style jsx>{`
        .layout {
          &__wrapper {
            min-height: 100vh;
            width: 100vw;
            display: flex;
            flex-direction: column;
            background-color: #f5f5f5;
          }
        }
      `}</style>
    </>
  );
}
