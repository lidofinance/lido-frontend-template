import { FC } from 'react';
import { isMobile } from 'react-device-detect';
import { ConnectButtonProps } from './types';
import ConnectButton from './connectButton';

const ConnectButtonMobile: FC<ConnectButtonProps> = (props) => {
  const { disabled, ...rest } = props;

  return <ConnectButton disabled={!isMobile || disabled} {...rest} />;
};

export default ConnectButtonMobile;
