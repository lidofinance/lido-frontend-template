import { NextApiRequest, NextApiResponse } from 'next';
import { serverLogger } from 'utilsAPI';

export default function cspReport(
  req: NextApiRequest,
  res: NextApiResponse,
): void {
  serverLogger.warn({
    type: 'CSP Violation',
    ...JSON.parse(req.body),
  });

  res.status(200).send({ status: 'ok' });
}
