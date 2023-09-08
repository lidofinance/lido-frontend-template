# @lidofinance/faq

FAQ JSX (TSX) components and fetch utils.

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
  FAQItem,
  getRawDataFromNetlifyOrCache,
  parseNetlifyWidgetFAQ,
  pagesFAQ,
  FaqAccordion,
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
  const faqNetlifyUrl = '<path_to_netlify_file>';
  const [, faqRawData] = await getRawDataFromNetlifyOrCache(faqNetlifyUrl);

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
```
