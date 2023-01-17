/// <reference types="@lidofinance/theme" />
/// <reference types="styled-components/cssprop" />

// TODO: move common or remove?
declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

// TODO: refactor and move (for details by Vsevolod)
type RuntimeConfig = {
  basePath?: string;
  infuraApiKey?: string;
  alchemyApiKey?: string;
  apiProviderUrls?: Record<number, string>;
};
