import { FC, FormEventHandler, useEffect } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import {
  useContractSWR,
  useSTETHContractRPC,
  useLidoSWR,
} from '@lido-sdk/react';
import {
  Block,
  Link,
  DataTable,
  DataTableRow,
  Input,
  Steth,
  Button,
} from '@lidofinance/lido-ui';
import { trackEvent, MatomoEventType } from '@lidofinance/analytics-matomo';

import Faq from 'common/components/faq';
import Section from 'common/components/section';
import Wallet from 'common/components/wallet';
import Layout from 'common/layout/layout';
import { FAQItem, getFaqList } from 'common/utils/faqList';

import { standardFetcher } from 'common/utils';

interface HomeProps {
  faqList: FAQItem[];
}

const InputWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spaceMap.md}px;
`;

const Home: FC<HomeProps> = ({ faqList }) => {
  useEffect(() => {
    // TODO: needs?
    // PAY ATTENTION: Remove. Example just to showing how to use a matomo events tracking
    const matomoSomeEvent: MatomoEventType = [
      'Lido_Frontend_Template',
      'Mount index component',
      'mount_index_component',
    ];
    trackEvent(...matomoSomeEvent);
  }, []);

  const handleSubmit: FormEventHandler<HTMLFormElement> | undefined = (
    event,
  ) => {
    event.preventDefault();
    // TODO: remove
    alert('Submitted');
  };

  const contractRpc = useSTETHContractRPC();
  const tokenName = useContractSWR({
    contract: contractRpc,
    method: 'name',
  });

  const { data } = useLidoSWR<number>('/api/oneinch-rate', standardFetcher);
  const oneInchRate = data ? (100 - (1 / data) * 100).toFixed(2) : 1;

  return (
    // TODO: move Layout to app.
    <Layout
      title="Lido Frontend Template"
      subtitle="Develop Lido Apps without hassle"
    >
      <Head>
        <title>Lido | Frontend Template</title>
      </Head>

      {/* TODO: move from common to spec widget componetns */}
      <Section>
        <Wallet />
        <Block>
          {/* todo: remove form JSX tag */}
          <form action="" method="post" onSubmit={handleSubmit}>
            <InputWrapper>
              <Input
                fullwidth
                placeholder="0"
                leftDecorator={<Steth />}
                label="Token amount"
              />
            </InputWrapper>
            <Button fullwidth type="submit">
              Submit
            </Button>
          </form>
        </Block>
      </Section>

      {/* TODO: get Lido statistics from stake.lido.di as example */}
      <Section title="Data table" headerDecorator={<Link href="#">Link</Link>}>
        <Block>
          <DataTable>
            <DataTableRow title="Token name" loading={tokenName.initialLoading}>
              {tokenName.data}
            </DataTableRow>
            <DataTableRow title="1inch rate" loading={tokenName.initialLoading}>
              {oneInchRate}
            </DataTableRow>
          </DataTable>
        </Block>
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
