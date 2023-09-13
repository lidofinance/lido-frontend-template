# @lidofinance/faq

FAQ components and utils.

## Installation

* React 17 || 18

```bash
yarn add @lidofinance/faq

# and additional
yarn add next@^12.3.0 styled-components@^5.3.5 @lidofinance/lido-ui@^3.6.1
```

## Using

```tsx
import { FC } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import {
  FaqAccordion,
  parseNetlifyWidgetFAQ,
  FAQItem,
  PageFAQ,
} from '@lidofinance/ui-faq';


interface ExampleProps {
  faqList: FAQItem[];
}

// PAY ATTENTION: Example showing how to add page (and for routing test)
const Example: FC<ExampleProps> = ({ faqList }) => (
  <FaqAccordion faqList={faqList} />
);

export default Example;

export const getStaticProps: GetStaticProps<ExampleProps> = async () => {
  let foundPage: PageFAQ | undefined = undefined;
  const pageIdentification = '<url_to_netlify_file>';

  try {
    // Better use your own fetch wrapper (or axios) with timeout, metrics, logger etc.
    const netlifyRawData = fetch(serverRuntimeConfig.faqNetlifyUrl);

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
```
