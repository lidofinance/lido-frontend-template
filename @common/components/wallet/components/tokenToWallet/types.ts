import { Component } from '@common/types';

export type TokenToWalletComponent = Component<
  'button',
  {
    address: string;
  }
>;
