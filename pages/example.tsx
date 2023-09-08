import { FC } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import { Section } from '@lidofinance/lido-ui';
import { LayoutSubTitle, LayoutTitle } from '@lidofinance/next-widget-layout';
import {
  FaqAccordion,
  parseNetlifyWidgetFAQ,
  FAQItem,
  PageFAQ,
} from '@lidofinance/ui-faq';

import { serverRuntimeConfig } from 'config';
import { serverAxios } from 'utilsApi';

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
  let foundPage: PageFAQ | undefined;
  const pageIdentification = 'example_page';

  try {
    const { data: netlifyRawData } = await serverAxios.get<string>(
      serverRuntimeConfig.faqNetlifyUrl,
    );

    const pages = await parseNetlifyWidgetFAQ(netlifyRawData);
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
