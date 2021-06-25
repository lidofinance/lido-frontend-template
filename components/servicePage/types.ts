import { Component } from 'types';

export type ServicePageComponent = Component<
  'div',
  {
    title: React.ReactNode;
  }
>;
