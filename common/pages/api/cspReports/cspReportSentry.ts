import { NextApiRequest, NextApiResponse } from 'next';

export default function cspReportSentry(
  req: NextApiRequest,
  res: NextApiResponse,
): void {
  // TODO: send to sentry

  res.status(200).send({ status: 'ok' });
}
