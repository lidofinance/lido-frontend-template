import { Component } from 'types';
import { BlockProps } from '@lidofinance/lido-ui';
import { FC } from 'react';

export type ClaimCardComponent = FC<BlockProps>;

export type ClaimStatComponent = Component<'div'>;

export type ClaimStatBalanceComponent = Component<
  'div',
  {
    title: React.ReactNode;
    value: React.ReactNode;
    small?: boolean;
    loading?: boolean;
    bold?: boolean;
    extra?: React.ReactNode;
    disabled?: boolean;
  }
>;

export type ClaimCardEditComponent = Component<'div', { disabled?: boolean }>;
