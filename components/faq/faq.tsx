import { FC } from 'react';
import { Accordion } from '@lidofinance/lido-ui';

import { FaqProps } from './types';
import { FaqItem } from './faqStyles';

// PAY ATTENTION: FAQ will be work over the Netlify
export const Faq: FC<FaqProps> = (props) => {
  const { faqList } = props;

  return (
    <>
      {faqList.map(({ id, title, content }, index) => (
        <Accordion
          key={id}
          defaultExpanded={index === 0}
          summary={String(title)}
        >
          <FaqItem
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
        </Accordion>
      ))}
    </>
  );
};
