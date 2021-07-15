import { Component } from 'types';

export type TokenToWalletComponent = Component<
  'button',
  {
    address: string;
  }
>;
