import { FC } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import { Link } from '@lidofinance/lido-ui';

import Section from '@common/components/section';
import Faq from '@common/components/faq';
import Wallet from '@common/components/wallet';
import { LayoutTitle, LayoutSubTitle } from '@common/layout/styles';
import { FAQItem, getFaqList } from '@common/utils/faqList';

import StakeForm from 'components/stakeForm';
import Statistics from 'components/statistics';

interface HomeProps {
  faqList: FAQItem[];
}

const Home: FC<HomeProps> = ({ faqList }) => {
  return (
    <>
      <Head>
        <title>Lido | Frontend Template</title>
      </Head>

      <LayoutTitle>Lido Frontend Template</LayoutTitle>
      <LayoutSubTitle>Develop Lido Apps without hassle</LayoutSubTitle>

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
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => ({
  props: {
    faqList: await getFaqList(['lido-frontend-template']),
  },
});
