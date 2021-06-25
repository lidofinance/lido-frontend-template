import { Component } from 'types';

export type FormatPercentComponent = Component<
  'span',
  {
    amount: number | null;
  }
>;
