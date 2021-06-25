import { LogoLDOPLStyle, LogoLDOStyle } from './logosStyles';
import { LogoComponent } from './types';

export const LogoLDO: LogoComponent = (props) => {
  return <LogoLDOStyle {...props} />;
};

export const LogoLDOPL: LogoComponent = (props) => {
  return <LogoLDOPLStyle {...props} />;
};
