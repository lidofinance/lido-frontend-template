import { FC, useCallback } from 'react';
import { ConnectWalletProps } from './types';
import ConnectButton from './connectButton';
import iconUrl from 'assets/icons/metamask.svg';
import { useConnectorMetamask, helpers } from '@lido-sdk/web3-react';

const disabledMessage =
  'Your browser has a turned-on “Coin98 Wallet”' +
  ' extension. Please, turn off this extension to enable the MetaMask wallet.';

const ConnectMetamask: FC<ConnectWalletProps> = (props) => {
  const { onConnect, termsChecked, ...rest } = props;
  const { connect } = useConnectorMetamask();

  const handleConnect = useCallback(async () => {
    onConnect?.();
    connect();
  }, [onConnect, connect]);

  const disabled = props.disabled || helpers.isCoin98Provider();

  return (
    <ConnectButton
      {...rest}
      disabled={disabled}
      isTooltipTriggerShown={termsChecked && helpers.isCoin98Provider()}
      tooltipMessage={disabledMessage}
      iconSrc={iconUrl}
      onClick={handleConnect}
    >
      Metamask
    </ConnectButton>
  );
};

export default ConnectMetamask;
