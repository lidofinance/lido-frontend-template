import { NextApiRequest, NextApiResponse } from 'next';
import { serverLogger } from '@common/utils';

export default function cspReportServerLoggerApiPage(
  req: NextApiRequest,
  res: NextApiResponse,
): void {
  serverLogger.warn({
    message: 'CSP Violation',
    report: JSON.parse(req.body),
  });

  res.status(200).send({ status: 'ok' });
}
