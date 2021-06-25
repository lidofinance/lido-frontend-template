import { Component } from 'types';
import { BlockProps } from '@lidofinance/lido-ui';
import { FC } from 'react';

export type WalletCardComponent = FC<BlockProps>;

export type WalletCardRowComponent = Component<'div'>;

export type WalletCardBalanceComponent = Component<
  'div',
  {
    title: React.ReactNode;
    value: React.ReactNode;
    small?: boolean;
    loading?: boolean;
    extra?: React.ReactNode;
  }
>;
