import { metricsFactory } from '@lidofinance/next-pages/api';
import { registry } from 'utilsApi/metrics';
import { contractInfo } from 'utils/metrics';

if (process.env.NODE_ENV === 'production') {
  // Collect 'contract info' metrics
  registry.registerMetric(contractInfo);

  // PAY ATTENTION: Extra metrics can be registered here
}

const metrics = metricsFactory({
  registry,
});

export default metrics;
