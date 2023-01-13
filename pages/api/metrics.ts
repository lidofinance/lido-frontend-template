import { NextApiRequest, NextApiResponse } from 'next';
import { registry } from 'common/utils/metrics';

type Metrics = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

// TODO: use https://github.com/lidofinance/warehouse/blob/main/packages/next/pages/src/metricsFactory.ts
const metrics: Metrics = async (req, res) => {
  const collectedMetrics = await registry.metrics();
  res.send(collectedMetrics);
};

export default metrics;
