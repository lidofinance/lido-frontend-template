import { FC } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import { Section, Link } from '@lidofinance/lido-ui';
import { LayoutTitle, LayoutSubTitle } from '@lidofinance/next-widget-layout';
import {
  FaqAccordion,
  getRawDataFromNetlifyOrCache,
  parseNetlifyWidgetFAQ,
  FAQItem,
  pagesFAQ,
} from '@lidofinance/ui-faq';

import { serverRuntimeConfig } from 'config';
import EthWallet from 'components/ethWalletCard';
import StakeForm from 'components/stakeForm';
import LidoStatistics from 'components/lidoStatistics';

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
        <EthWallet />
        <StakeForm />
      </Section>

      <Section
        title="Lido statistics"
        headerDecorator={
          <Link href="https://etherscan.io/token/0xae7ab96520de3a18e5e111b5eaab095312d7fe84">
            View on Etherscan
          </Link>
        }
      >
        <LidoStatistics />
      </Section>

      <Section title="FAQ">
        <FaqAccordion faqList={faqList} />
      </Section>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const [, faqRawData] = await getRawDataFromNetlifyOrCache(
    serverRuntimeConfig.faqNetlifyUrl,
  );

  let faqList: pagesFAQ | undefined = undefined;
  if (faqRawData) {
    const pages = await parseNetlifyWidgetFAQ(faqRawData);
    faqList = pages.find(
      (page: pagesFAQ) => page['identification'] === 'index_page',
    );
  }

  return {
    props: {
      faqList: [],

      ...(faqList &&
        faqList['faq'] && {
          faqList: faqList['faq'],
        }),
    },
  };
};
