import { CHAINS } from 'config';
import { FC } from 'react';

export type TransactionToastComponent = FC<{
  title: React.ReactNode;
}>;

export type TransactionToastEtherscanComponent = FC<{
  title: React.ReactNode;
  chainId: CHAINS;
  hash: string;
}>;
