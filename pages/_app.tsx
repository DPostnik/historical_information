import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { Suspense } from 'react';

import { AppProvider } from 'common/store/app.context';
import Layout from 'components/layout/layout';

import 'styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <AppProvider>
    <Layout>
      <Suspense fallback="loading">
        <Component {...pageProps} />
      </Suspense>
    </Layout>
  </AppProvider>
);

export default appWithTranslation(MyApp);
