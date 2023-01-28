/// <reference types="@lidofinance/theme" />
/// <reference types="styled-components/cssprop" />

// Unable to import svg files in typescript like ```import svgFile from './svgFile.svg'```
declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
