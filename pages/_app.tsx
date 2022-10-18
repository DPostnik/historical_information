import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';

import 'styles/globals.css';
import { AppProvider } from 'common/store/app.context';
import Layout from 'components/layout/layout';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <AppProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </AppProvider>
);

export default appWithTranslation(MyApp);
