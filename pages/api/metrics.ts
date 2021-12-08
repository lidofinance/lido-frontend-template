import { METRICS_PREFIX } from 'config';
import { NextApiRequest, NextApiResponse } from 'next';
import { collectDefaultMetrics, register } from 'prom-client';

import {
  collectBuildInfo,
  collectChainConfig,
  collectContracts,
  timeAlchemy,
  timeInfura,
} from 'utils/metrics';

type Metrics = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

collectDefaultMetrics({ prefix: METRICS_PREFIX });

const metrics: Metrics = async (req, res) => {
  collectBuildInfo();
  collectChainConfig();
  collectContracts();
  await timeInfura();
  await timeAlchemy();

  res.setHeader('Content-type', register.contentType);
  const allMetrics = await register.metrics();
  res.send(allMetrics);
};

export default metrics;
