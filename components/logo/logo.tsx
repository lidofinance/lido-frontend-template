import { FC } from 'react';
import { LogoStyle } from './logoStyles';
import { ReactComponent as LogoIcon } from 'assets/logo.svg';

const Logo: FC = (props) => (
  <LogoStyle {...props}>
    <LogoIcon />
  </LogoStyle>
);

export default Logo;
