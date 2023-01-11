import React from 'react';

export interface INavigationLink {
  icon: string | React.ReactNode; // can be URL
  title: string;
  href: string;
  external?: boolean;
}
