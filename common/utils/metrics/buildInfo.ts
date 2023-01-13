import { Gauge } from 'prom-client';
import buildInfoJson from 'build-info.json';
import { METRICS_PREFIX } from 'config';

export const buildInfo = new Gauge({
  name: METRICS_PREFIX + 'build_info',
  help: 'Version, branch and commit of the current build',
  labelNames: ['version', 'branch', 'commit'],
  registers: [],
});

const version = process.env.npm_package_version ?? 'unversioned';

buildInfo.labels(version, buildInfoJson.branch, buildInfoJson.commit).set(1);
