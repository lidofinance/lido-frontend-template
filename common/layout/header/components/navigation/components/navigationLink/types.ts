import React from 'react';

export interface INavigationLink {
  // TODO: just React.ReactNode
  icon: string | React.ReactNode; // can be URL
  title: string;
  href: string;
  external?: boolean;
}
