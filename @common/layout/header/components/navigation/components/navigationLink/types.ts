import React from 'react';

export interface INavigationLink {
  icon: React.ReactNode;
  title: string;
  href: string;
  external?: boolean;
}
