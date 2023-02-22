import { Histogram } from 'prom-client';
import { getStatusLabel } from '@lidofinance/api-metrics';
import { RequestWrapper } from '@lidofinance/next-api-wrapper';

// TODO: move to https://github.com/lidofinance/warehouse/tree/main/packages/next/api-wrapper
export const responseTimeMetric =
  (metrics: Histogram<string>, route: string): RequestWrapper =>
  async (req, res, next) => {
    let status = '2xx';
    const endMetric = metrics.startTimer({ route });

    try {
      await next?.(req, res, next);
      status = getStatusLabel(res.statusCode);
    } catch (error) {
      status = getStatusLabel(res.statusCode);
      // throw error up the stack
      throw error;
    } finally {
      endMetric({ status });
    }
  };
