import type { NextPage } from 'next';
import withTranslation from '../middlewares/withTranslation';

const Home: NextPage = () => {
  return <>content</>;
};

export default Home;

export const getStaticProps = withTranslation();
