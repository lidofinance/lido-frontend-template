import React from 'react';
import { Component } from '../../../types';
export type WalletCardBalanceComponent = Component<'div', {
    title: React.ReactNode;
    value: React.ReactNode;
    small?: boolean;
    loading?: boolean;
    extra?: React.ReactNode;
}>;
