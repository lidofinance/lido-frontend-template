import { TOKENS } from 'config';
import { Component } from 'types';

export type TokenToWalletComponent = Component<
  'button',
  {
    token: TOKENS;
  }
>;
