import { METRICS_PREFIX } from 'config';
import { NextApiRequest, NextApiResponse } from 'next';
import { collectDefaultMetrics, register } from 'prom-client';

type Metrics = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

const metrics: Metrics = async (req, res) => {
  register.clear();
  collectDefaultMetrics({ prefix: METRICS_PREFIX });

  res.setHeader('Content-type', register.contentType);
  const allMetrics = await register.metrics();
  res.send(allMetrics);
};

export default metrics;
