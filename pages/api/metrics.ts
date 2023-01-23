import { NextApiRequest, NextApiResponse } from 'next';
import { registry } from 'common/utils/metrics';
import { contractInfo } from 'utils/metrics';

if (process.env.NODE_ENV === 'production') {
  // Collect 'contract info' metrics
  registry.registerMetric(contractInfo);

  // Extra metrics can be registered here
  // code```
  //  registry.registerMetric(someMetric);
  // ```
}

type Metrics = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

const metrics: Metrics = async (req, res) => {
  const collectedMetrics = await registry.metrics();
  res.send(collectedMetrics);
};

export default metrics;
