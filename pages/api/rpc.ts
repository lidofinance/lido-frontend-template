import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchRPC } from '@lido-sdk/fetch';
import { CHAINS } from '@lido-sdk/constants';
import getConfig from 'next/config';
import { DEFAULT_API_ERROR_MESSAGE } from 'config';

const { serverRuntimeConfig } = getConfig();
const { infuraApiKey, alchemyApiKey, apiProviderUrls } =
  serverRuntimeConfig as RuntimeConfig;

type Rpc = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

const rpc: Rpc = async (req, res) => {
  try {
    const chainId = Number(req.query.chainId);

    if (!CHAINS[chainId]) {
      throw new Error(`Chain ${chainId} is not supported`);
    }

    const apiUrl = apiProviderUrls?.[chainId];
    const options = {
      body: JSON.stringify(req.body),
      urls: apiUrl ? [apiUrl] : [],
      providers: { alchemy: alchemyApiKey, infura: infuraApiKey },
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const requested = await fetchRPC(chainId, options);

    const responded = await requested.json();
    res.status(requested.status).json(responded);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message ?? DEFAULT_API_ERROR_MESSAGE);
    } else {
      res.status(500).json(DEFAULT_API_ERROR_MESSAGE);
    }
  }
};

export default rpc;
