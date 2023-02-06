import metricsApiPage from '@common/pages/api/metrics';
import { registry } from '@common/utils/metrics';
import { contractInfo } from 'utils/metrics';

if (process.env.NODE_ENV === 'production') {
  // Collect 'contract info' metrics
  registry.registerMetric(contractInfo);

  // PAY ATTENTION: Extra metrics can be registered here
}

export default metricsApiPage;
