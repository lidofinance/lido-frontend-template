import { FC, useCallback } from 'react';
import { ConnectWalletProps } from './types';
import ConnectButton from './connectButton';
import iconUrl from 'assets/icons/coin98.svg';
import { helpers, useConnectorCoin98 } from '@lido-sdk/web3-react';

const disabledMessage =
  'Your browser has a turned-on “MathWallet” extension.' +
  ' Please, turn off this extension and reload the page' +
  ' to enable the Coin98 wallet.';

const ConnectCoin98: FC<ConnectWalletProps> = (props) => {
  const { onConnect, termsChecked, ...rest } = props;
  const { isMathWalletProvider } = helpers;
  const { connect } = useConnectorCoin98();

  const handleConnect = useCallback(async () => {
    onConnect?.();
    connect();
  }, [onConnect, connect]);

  const disabled = props.disabled || isMathWalletProvider();

  return (
    <ConnectButton
      {...rest}
      disabled={disabled}
      isTooltipTriggerShown={termsChecked && disabled}
      tooltipMessage={disabledMessage}
      iconSrc={iconUrl}
      onClick={handleConnect}
    >
      Coin98
    </ConnectButton>
  );
};

export default ConnectCoin98;
