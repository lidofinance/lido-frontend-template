const cluster = require('node:cluster');
const process = require('node:process');
const { cpus } = require('node:os');
const http = require('node:http');
const { AggregatorRegistry } = require('prom-client');

import('./scripts/build-dynamics.mjs').then((buildDynamics) => {
  buildDynamics.default();

  const forksCount = process.env.FORKS_COUNT ?? cpus().length;
  const port = process.env.METRICS_PORT ?? 3001;

  if (cluster.isPrimary) {
    console.log(`Primary ${process.pid} is running`);
    cluster.setupPrimary({
      exec: require.resolve('.bin/next'),
      args: ['start', ...process.argv.slice(2)],
      stdio: 'inherit',
      shell: true,
    });

    const aggregatedRegistry = new AggregatorRegistry();
    // clusterMetrics only works in Primary process
    // https://github.com/siimon/prom-client/blob/721829cc593bb7da28ae009985caeeacb4b59e05/lib/cluster.js#L157
    const requestListener = async function (req, res) {
      try {
        const metrics = await aggregatedRegistry.clusterMetrics();
        res.writeHead(200);
        res.end(metrics);
      } catch (e) {
        res.writeHead(500);
        res.end(e.message);
      }
    };
    const server = http.createServer(requestListener);
    server.listen(port);
    console.log(`Cluster metrics server listening on port ${port}`);

    for (let i = 0; i < forksCount; i++) {
      cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
      console.log(`worker ${worker.process.pid} died`, { code, signal });
    });
  }
});
