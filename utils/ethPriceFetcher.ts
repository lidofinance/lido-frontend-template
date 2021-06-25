import { standardFetcher, DEFAULT_PARAMS } from './standardFetcher';

type EthPriceFetcher = () => Promise<string>;
type FetchResult = {
  data: { bundle: { ethPrice: string } };
};

const ETH_PRICE_QUERY = `{
  bundle(id: "1" ) {
    ethPrice
  }
}`;

export const ethPriceFetcher: EthPriceFetcher = async () => {
  const data = await standardFetcher<FetchResult>(
    'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2',
    {
      ...DEFAULT_PARAMS,
      body: JSON.stringify({ query: ETH_PRICE_QUERY }),
      method: 'POST',
    },
  );

  return data.data.bundle.ethPrice;
};
