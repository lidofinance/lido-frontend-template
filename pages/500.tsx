import { FC } from 'react';
import { PageError } from '@lidofinance/next-ui-pages';

const Page500: FC = () => (
  <PageError title="500" content="Internal Server Error" />
);

export default Page500;
