import { FC } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import { Section, Link } from '@lidofinance/lido-ui';
import { LayoutTitle, LayoutSubTitle } from '@lidofinance/next-widget-layout';
import { FaqAccordion, getFAQ, FAQItem, PageFAQ } from '@lidofinance/ui-faq';

import { serverRuntimeConfig } from 'config';
import EthWallet from 'components/ethWalletCard';
import StakeForm from 'components/stakeForm';
import LidoStatistics from 'components/lidoStatistics';
import { serverAxios } from 'utilsApi';

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
  let foundPage: PageFAQ | undefined = undefined;
  const pageIdentification = 'index_page';

  try {
    const pages = await getFAQ(serverRuntimeConfig.faqNetlifyUrl, serverAxios);
    foundPage = pages.find(
      (page: PageFAQ) => page['identification'] === pageIdentification,
    );
  } catch {
    // noop
  }

  return {
    props: {
      faqList: [],

      ...(foundPage &&
        foundPage['faq'] && {
          faqList: foundPage['faq'],
        }),
    },
  };
};
