import { FC } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import {
  useContractSWR,
  useSTETHContractRPC,
  useLidoSWR,
} from '@lido-sdk/react';
import { Block, Link, DataTable, DataTableRow } from '@lidofinance/lido-ui';

import Faq from 'common/components/faq';
import Section from 'common/components/section';
import Wallet from 'common/components/wallet';
import Layout from 'common/layout/layout';
import { FAQItem, getFaqList } from 'common/utils/faqList';
import { standardFetcher } from 'common/utils';

import StakeForm from 'components/stakeForm';

interface HomeProps {
  faqList: FAQItem[];
}

const Home: FC<HomeProps> = ({ faqList }) => {
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

      <Section>
        <Wallet />
        <StakeForm />
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
