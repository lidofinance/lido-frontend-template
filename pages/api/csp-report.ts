import { NextApiRequest, NextApiResponse } from 'next';
import { serverLogger } from 'common/utils/serverLogger';

// TODO: to sentry soon
export default function cspReport(
  req: NextApiRequest,
  res: NextApiResponse,
): void {
  serverLogger.warn({
    message: 'CSP Violation',
    report: JSON.parse(req.body),
  });

  res.status(200).send({ status: 'ok' });
}
