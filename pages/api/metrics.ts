import { NextApiRequest, NextApiResponse } from 'next';
import { registry } from 'utilsAPI/metrics';

type Metrics = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

const metrics: Metrics = async (_, res) => {
  const collectedMetrics = await registry.metrics();
  res.send(collectedMetrics);
};

export default metrics;
