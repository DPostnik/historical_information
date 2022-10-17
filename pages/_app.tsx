import { appWithTranslation } from 'next-i18next';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout/layout';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default appWithTranslation(MyApp);
