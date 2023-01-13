import { NextApiRequest, NextApiResponse } from 'next';

// TODO: use https://github.com/lidofinance/warehouse/blob/main/packages/next/pages/src/health.ts
export default function health(
  req: NextApiRequest,
  res: NextApiResponse,
): void {
  res.status(200).send({ status: 'ok' });
}
