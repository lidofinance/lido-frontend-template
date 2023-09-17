# @lidofinance/ui-faq

FAQ UI components and parse utils.

## Installation

* React 17 || 18

```bash
yarn add @lidofinance/faq

# and additional
yarn add next@^12.3.0 styled-components@^5.3.5 @lidofinance/lido-ui@^3.6.1 axios@^1.5.0 cache-manager@^5.2.3

# and warehouse packages
yarn add @lidofinance/analytics-matomo@^0.37.0 @lidofinance/next-ui-primitives@^0.37.0
```

## Using

There is SSR example (using `getStaticProps`), but also you can use `getFAQ` on client side inside any client component

```tsx
import { FC } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { FaqAccordion, getFAQ, FAQItem, PageFAQ } from '@lidofinance/ui-faq';
import { serverAxios } from 'utilsApi';


interface ExampleProps {
  faqList: FAQItem[];
}

const IndexPage: FC<ExampleProps> = ({ faqList }) => (
  <FaqAccordion faqList={faqList} />
);

export default IndexPage;

export const getStaticProps: GetStaticProps<ExampleProps> = async () => {
  let foundPage: PageFAQ | undefined;
  const pageIdentification = 'index_page';

  try {
    const pages = await getFAQ(serverRuntimeConfig.faqContentUrl, {
      // default axios instance without logger, metrics, timeout
      axiosInstance: serverAxios, // or clientAxios
      // cache default is true
      cache: true,
      // memoryCacheConfig default is undefined
      memoryCacheConfig: { max: 100, ttl: 6 * 100 * 1000 },
    });

    // or custom axios and without cache
    // const pages = await getFAQ(serverRuntimeConfig.faqContentUrl, {
    //   axiosInstance: clientAxios,
    //   cache: false,
    // });

    // or use internal FAQ pkg axios and use cache
    // const pages = await getFAQ(serverRuntimeConfig.faqContentUrl);
    
    // bacause `getFAQ` returns data for all pages
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

### Matomo analytics

Client side example. Let's make with [matomo analytics](https://www.npmjs.com/package/@lidofinance/analytics-matomo)!

```tsx
// See: @lidofinance/analytics-matomo
import { MATOMO_CLICK_EVENTS } from './matomoClickEvents';

export const matomoEventMap = new Map();

// Exact match required - 'https://lido.fi' or 'https://lido.fi/?ref=<ref>' not be working!
matomoEventMap.set('https://lido.fi/', MATOMO_CLICK_EVENTS.faqLidoLandingLink);
// Exact match required - 'example' or 'example/?ref=<ref>' not be working!
matomoEventMap.set('/example', MATOMO_CLICK_EVENTS.faqExamplePageLocalLink);
// Important: you should match `href` with `faqContentUrl` at source, not with `<FaqAccordion ... />` HTML output!

const ExamplePage2: FC = () => {
  const [foundPage, setFoundPage] = useState<PageFAQ | undefined>(undefined);

  useEffect(() => {
    void (async () => {
      try {
        const pageIdentification = 'example_page_2';
        const pages = await getFAQ(dynamics.faqContentUrl);

        setFoundPage(
          pages.find(
            (page: PageFAQ) => page['identification'] === pageIdentification,
          ),
        );
      } catch {
        // noop
      }
    })();
  }, []);
  
  return (
    <FaqAccordion faqList={faqList} matomoEventMap={matomoEventMap} />
  )
};

export default ExamplePage2;
```
