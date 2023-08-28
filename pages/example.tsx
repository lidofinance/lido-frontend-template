import { FC } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import { Section } from '@lidofinance/lido-ui';
import { LayoutSubTitle, LayoutTitle } from '@lidofinance/next-widget-layout';
import {
  FAQItem,
  getRawDataFromNetlifyOrCache,
  parseNetlifyWidgetFAQ,
  pagesFAQ,
  FaqAccordion,
} from '@lidofinance/ui-faq';

import { serverRuntimeConfig } from 'config';

interface ExampleProps {
  faqList: FAQItem[];
}

// PAY ATTENTION: Example showing how to add page (and for routing test)
const Example: FC<ExampleProps> = ({ faqList }) => {
  return (
    <>
      <Head>
        <title>Lido | Frontend Template | Example Page</title>
      </Head>

      <LayoutTitle>Example Page</LayoutTitle>
      <LayoutSubTitle>Just for routing test</LayoutSubTitle>

      <Section title="FAQ">
        <FaqAccordion faqList={faqList} />
      </Section>
    </>
  );
};

export default Example;

export const getStaticProps: GetStaticProps<ExampleProps> = async () => {
  const [, faqRawData] = await getRawDataFromNetlifyOrCache(
    serverRuntimeConfig.faqNetlifyUrl,
  );

  let faqList: pagesFAQ | undefined = undefined;
  if (faqRawData) {
    const pages = await parseNetlifyWidgetFAQ(faqRawData);
    faqList = pages.find(
      (page: pagesFAQ) => page['identification'] === 'example_page',
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
