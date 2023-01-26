import React from 'react';
import { Component } from 'common/types';

export type SectionType = Component<
  'section',
  {
    title?: React.ReactNode;
    headerDecorator?: React.ReactNode;
  }
>;
