import { NextApiRequest, NextApiResponse } from 'next';
// import { serverLogger } from 'utilsApi';

export default function cspReportServerLoggerApiPage(
  req: NextApiRequest,
  res: NextApiResponse,
): void {
  // TODO: get `serverLogger` from props or use local copy?
  // serverLogger.warn({
  //   message: 'CSP Violation',
  //   report: JSON.parse(req.body),
  // });

  res.status(200).send({ status: 'ok' });
}
