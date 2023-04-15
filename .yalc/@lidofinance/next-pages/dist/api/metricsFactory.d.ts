import { NextApiRequest, NextApiResponse } from 'next';
import { Registry } from 'prom-client';
export type MetricsFactoryParameters = {
    registry: Registry;
};
export declare const metricsFactory: ({ registry }: MetricsFactoryParameters) => (_req: NextApiRequest, res: NextApiResponse) => Promise<void>;
//# sourceMappingURL=metricsFactory.d.ts.map