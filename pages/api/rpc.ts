import type { NextApiRequest, NextApiResponse } from 'next';
import getConfig from 'next/config';
import { getRPCUrls } from '@lido-sdk/fetch';
import { CHAINS } from '@lido-sdk/constants';
import {
  wrapRequest,
  defaultErrorHandler,
} from '@lidofinance/next-api-wrapper';

import { fetchWithFallbacks } from 'common/utils/fetchWithFallbacks';
import { serverLogger } from 'common/utils/serverLogger';

const { serverRuntimeConfig } = getConfig();
const { infuraApiKey, alchemyApiKey, apiProviderUrls } =
  serverRuntimeConfig as RuntimeConfig;

type Rpc = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

// TODO: use https://github.com/lidofinance/warehouse/blob/main/packages/next/pages/src/rpcFactory.ts#L40
const rpc: Rpc = async (req, res) => {
  serverLogger.debug('Request to RPC');
  const chainId = Number(req.query.chainId);

  if (!CHAINS[chainId]) {
    throw new Error(`Chain ${chainId} is not supported`);
  }

  const urls = getRPCUrls(chainId, {
    infura: infuraApiKey,
    alchemy: alchemyApiKey,
  });

  const customProvider = apiProviderUrls?.[chainId];

  if (customProvider) {
    urls.unshift(customProvider);
  }

  const requested = await fetchWithFallbacks(urls, {
    method: 'POST',
    // Next by default parses our body for us, we don't want that here
    body: JSON.stringify(req.body),
  });

  res.setHeader(
    'Content-Type',
    requested.headers.get('Content-Type') ?? 'application/json',
  );
  res.status(requested.status).send(requested.body);
};

// Error handler wrapper
export default wrapRequest([
  defaultErrorHandler({ serverLogger: serverLogger }),
])(rpc);
