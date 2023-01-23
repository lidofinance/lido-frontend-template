import React from 'react';
import { Component } from 'common/types';

// TODO: `title`, `headerDecorator` is not necessary
export type SectionComponent = Component<
  'section',
  {
    title?: React.ReactNode;
    headerDecorator?: React.ReactNode;
  }
>;
