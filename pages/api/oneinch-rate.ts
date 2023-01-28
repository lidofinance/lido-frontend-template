import {
  API,
  wrapRequest,
  cacheControl,
  defaultErrorHandler,
} from '@lidofinance/next-api-wrapper';
import { CHAINS, TOKENS, getTokenAddress } from '@lido-sdk/constants';
import { serverLogger } from 'common/utils';

/**
 * PAY ATTENTION: Example showing how to use API wrappers (error handler and cache control).
 * Proxy example for third-party API.
 * @returns {rate: Number} Returns object with number of 1inch rate.
 */
// TODO: change to Lido APR ('cause 1Inch rate is expensive)
const oneInchRate: API = async (req, res) => {
  const amount = 10 ** 18;
  const api = `https://api.1inch.exchange/v3.0/1/quote`;
  const query = new URLSearchParams({
    fromTokenAddress: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    toTokenAddress: getTokenAddress(CHAINS.Mainnet, TOKENS.STETH),
    amount: amount.toString(),
  });
  const url = `${api}?${query.toString()}`;

  const response = await fetch(url);
  const data: { toTokenAmount: string } = await response.json();

  const rate = parseFloat(data.toTokenAmount) / amount;
  res.json(rate);
};

export default wrapRequest([
  cacheControl(),
  defaultErrorHandler({ serverLogger }),
])(oneInchRate);
