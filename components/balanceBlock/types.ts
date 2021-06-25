import { Component } from 'types';

export type BalanceBlockComponent = Component<
  'div',
  {
    title: React.ReactNode;
    icon?: React.ReactNode;
  }
>;
