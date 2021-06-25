import type { NextApiRequest, NextApiResponse } from 'next';
import { getRpcJsonUrls, CHAINS } from 'config';
import { fetchWithFallback } from 'utils';

type Rpc = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

const rpc: Rpc = async (req, res) => {
  try {
    const chainId = Number(req.query.chainId);

    if (!CHAINS[chainId]) {
      throw new Error(`Chain ${chainId} is not supported`);
    }

    const urls = getRpcJsonUrls(chainId);
    const requested = await fetchWithFallback(urls, {
      method: 'POST',
      // Next by default parses our body for us, we don't want that here
      body: JSON.stringify(req.body),
    });

    const responded = await requested.json();
    res.status(requested.status).json(responded);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default rpc;
