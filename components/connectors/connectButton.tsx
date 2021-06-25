import { FC } from 'react';
import {
  ConnectButtonStyle,
  ConnectButtonContentStyle,
  ConnectButtonIconStyle,
} from './connectButtonStyles';
import { ConnectButtonProps } from './types';

const ConnectButton: FC<ConnectButtonProps> = (props) => {
  const { iconSrc, children, ...rest } = props;

  return (
    <ConnectButtonStyle {...rest}>
      <ConnectButtonContentStyle>
        {children}
        <ConnectButtonIconStyle>
          <img src={iconSrc} alt="" />
        </ConnectButtonIconStyle>
      </ConnectButtonContentStyle>
    </ConnectButtonStyle>
  );
};

export default ConnectButton;
