import { FC } from 'react';
import { Tooltip } from '@lidofinance/lido-ui';
import {
  ConnectButtonStyle,
  ConnectButtonContentStyle,
  ConnectButtonIconStyle,
  ConnectButtonTitleStyle,
  ConnectButtonTooltipTriggerStyle,
} from './connectButtonStyles';
import { ConnectButtonProps } from './types';

const ConnectButton: FC<ConnectButtonProps> = (props) => {
  const { iconSrc, children, isTooltipTriggerShown, tooltipMessage, ...rest } =
    props;

  return (
    <ConnectButtonStyle {...rest}>
      <ConnectButtonContentStyle>
        <ConnectButtonTitleStyle>{children}</ConnectButtonTitleStyle>
        {isTooltipTriggerShown && tooltipMessage && (
          <Tooltip offset="sm" placement="bottomLeft" title={tooltipMessage}>
            <ConnectButtonTooltipTriggerStyle>
              How to enable?
            </ConnectButtonTooltipTriggerStyle>
          </Tooltip>
        )}
        <ConnectButtonIconStyle>
          <img src={iconSrc} alt="" />
        </ConnectButtonIconStyle>
      </ConnectButtonContentStyle>
    </ConnectButtonStyle>
  );
};

export default ConnectButton;
