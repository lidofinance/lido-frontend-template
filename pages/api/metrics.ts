import { METRICS_PREFIX } from 'config';
import { NextApiRequest, NextApiResponse } from 'next';
import { collectDefaultMetrics, Gauge, register } from 'prom-client';
import buildInfoJson from 'build-info.json';

type Metrics = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

const metrics: Metrics = async (req, res) => {
  register.clear();

  collectBuildInfo();
  collectDefaultMetrics({ prefix: METRICS_PREFIX });

  res.setHeader('Content-type', register.contentType);
  const allMetrics = await register.metrics();
  res.send(allMetrics);
};

export default metrics;

export const collectBuildInfo = (): void => {
  const buildInfo = new Gauge({
    name: METRICS_PREFIX + 'build_info',
    help: 'Build information',
    labelNames: ['version', 'commit', 'branch'],
  });

  const { version, commit, branch } = buildInfoJson;

  buildInfo.labels(version, commit, branch).set(1);
};
