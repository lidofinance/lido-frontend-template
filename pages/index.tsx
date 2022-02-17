import { FC, useState } from 'react';
import { GetServerSideProps } from 'next';
import { Block, Link, DataTable, DataTableRow } from '@lidofinance/lido-ui';
import Tabs from 'components/tabs';
import Wallet from 'components/wallet';
import Section from 'components/section';
import Layout from 'components/layout';
import Faq from 'components/faq';
import { FAQItem, getFaqList } from 'lib/faqList';
import { useContractSWR, useSDK } from '@lido-sdk/react';
import { useLidoMaticRPC, useMaticTokenWeb3 } from 'hooks';
import Stake from 'components/stake';
import Unstake from 'components/unstake';
import Claim from 'components/claim';
import { formatBalance } from 'utils';
import { SCANNERS, LIDO_MATIC_BY_NETWORK } from 'config';

interface HomeProps {
  faqList: FAQItem[];
}

const Home: FC<HomeProps> = ({ faqList }) => {
  const { chainId } = useSDK();
  const maticTokenWeb3 = useMaticTokenWeb3();
  const lidoMaticRPC = useLidoMaticRPC();
  const [selectedTab, setSelectedTab] = useState('STAKE');
  const [symbol, setSymbol] = useState('MATIC');

  maticTokenWeb3?.symbol().then(setSymbol);

  const totalTokenStaked = useContractSWR({
    contract: lidoMaticRPC,
    method: 'getTotalPooledMatic',
  });

  return (
    <Layout
      title="Lido for Polygon"
      subtitle="Stake Matic and receive stMatic while staking."
    >
      <Tabs
        options={['STAKE', 'UNSTAKE', 'CLAIM']}
        selected={selectedTab}
        onSelectTab={setSelectedTab}
      />
      <Wallet />
      {selectedTab === 'STAKE' ? <Stake /> : null}
      {selectedTab === 'UNSTAKE' ? (
        <Unstake changeTab={setSelectedTab} />
      ) : null}
      {selectedTab === 'CLAIM' ? <Claim changeTab={setSelectedTab} /> : null}
      <Section
        title="Lido statistics"
        headerDecorator={
          <Link
            href={`${SCANNERS[chainId]}token/${LIDO_MATIC_BY_NETWORK[chainId]}`}
          >
            View on Etherscan
          </Link>
        }
      >
        <Block>
          <DataTable title="Lido">
            {/*
              TODO: Add after historical data can be fetched
              <DataTableRow title="Annual percentage rate">40.5%</DataTableRow>
             */}
            <DataTableRow
              title="Total staked with Lido"
              loading={totalTokenStaked.initialLoading}
            >
              {formatBalance(totalTokenStaked.data)} {symbol}
            </DataTableRow>
            {/* 
             TODO: uncomment after getting api key for etherscan
            <DataTableRow title="Stakers" loading={tokenName.initialLoading}>
              99 999
            </DataTableRow>
             */}
            {/* <DataTableRow
              title="stMATIC market cap"
              loading={tokenName.initialLoading}
            >
              $9,999,999,999
            </DataTableRow> */}
          </DataTable>
        </Block>
      </Section>
      <Faq faqList={faqList} />
    </Layout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  // list of .md files from /faq/
  const fileList = [
    'lido-polygon',
    'how-does-it-work',
    'liquid-staking',
    'stMatic',
    'requesting-withdraw',
    'ldo',
    'fees',
  ];
  const faqList = await getFaqList(fileList);

  return { props: { faqList } };
};
