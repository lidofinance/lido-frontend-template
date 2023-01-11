import React, { PropsWithChildren } from 'react';
import { INavigationLink } from 'common/header/components/navigation/components/navigationLink';

export interface ILayout extends PropsWithChildren {
  pages?: INavigationLink[];
  title?: string | React.ReactNode; // can be simple text
  subtitle?: string | React.ReactNode; // can be simple text
  walletConnector?: React.Component; // will be injected by default with ReefKnot and default components
  // header?: React.Component; // should have a input parameter `pages?` as `PageLink[]`
  // footer?: React.Component;
}
