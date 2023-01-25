import { FC } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import { Link } from '@lidofinance/lido-ui';

import Faq from 'common/components/faq';
import Section from 'common/components/section';
import Wallet from 'common/components/wallet';
import Layout from 'common/layout/layout';
import { FAQItem, getFaqList } from 'common/utils/faqList';

import StakeForm from 'components/stakeForm';
import Statistics from 'components/statistics';

interface HomeProps {
  faqList: FAQItem[];
}

const Home: FC<HomeProps> = ({ faqList }) => {
  return (
    // TODO: move Layout to app.
    <Layout
      title="Lido Frontend Template"
      subtitle="Develop Lido Apps without hassle"
    >
      <Head>
        <title>Lido | Frontend Template</title>
      </Head>

      <Section>
        <Wallet />
        <StakeForm />
      </Section>

      <Section title="Data table" headerDecorator={<Link href="#">Link</Link>}>
        <Statistics />
      </Section>

      <Section title="FAQ">
        <Faq faqList={faqList} />
      </Section>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => ({
  props: {
    faqList: await getFaqList(['lido-frontend-template']),
  },
});
