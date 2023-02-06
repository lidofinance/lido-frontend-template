import { NextApiRequest, NextApiResponse } from 'next';
import { registry } from '@common/utils/metrics';

type MetricsProps = (
  req: NextApiRequest,
  res: NextApiResponse,
) => Promise<void>;

const metricsApiPage: MetricsProps = async (req, res) => {
  const collectedMetrics = await registry.metrics();
  res.send(collectedMetrics);
};

export default metricsApiPage;
