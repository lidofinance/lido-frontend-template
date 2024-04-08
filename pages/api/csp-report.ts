import { NextApiRequest, NextApiResponse } from 'next';

export default function cspReport(
  req: NextApiRequest,
  res: NextApiResponse,
): void {
  console.warn({
    message: 'CSP Violation',
    report: JSON.parse(req.body),
  });

  res.status(200).send({ status: 'ok' });
}
