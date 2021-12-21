import { NextApiRequest, NextApiResponse } from 'next';
import { registry } from 'utils/metrics';

type Metrics = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

const metrics: Metrics = async (req, res) => {
  const collectedMetrics = await registry.metrics();
  res.send(collectedMetrics);
};

export default metrics;
