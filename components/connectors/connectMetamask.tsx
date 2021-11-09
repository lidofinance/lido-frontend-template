import { FC, useCallback } from 'react';
import { ConnectWalletProps } from './types';
import ConnectButton from './connectButton';
import iconUrl from 'assets/icons/metamask.svg';
import { useConnectorMetamask, helpers } from '@lido-sdk/web3-react';

const ConnectMetamask: FC<ConnectWalletProps> = (props) => {
  const { onConnect, termsChecked, ...rest } = props;
  const { isCoin98Provider, isMathWalletProvider } = helpers;
  const { connect } = useConnectorMetamask();

  const handleConnect = useCallback(async () => {
    onConnect?.();
    connect();
  }, [onConnect, connect]);

  const disabled =
    props.disabled || isCoin98Provider() || isMathWalletProvider();

  let conflictApp = '';
  if (disabled) {
    conflictApp = isCoin98Provider() ? 'Coin98 Wallet' : conflictApp;
    conflictApp = isMathWalletProvider() ? 'MathWallet' : conflictApp;
  }
  const disabledMessage =
    `Your browser has a turned-on “${conflictApp}” extension.` +
    ' Please, turn off this extension and reload the page' +
    ' to enable the MetaMask wallet.';

  return (
    <ConnectButton
      {...rest}
      disabled={disabled}
      isTooltipTriggerShown={termsChecked && disabled}
      tooltipMessage={disabledMessage}
      iconSrc={iconUrl}
      onClick={handleConnect}
    >
      Metamask
    </ConnectButton>
  );
};

export default ConnectMetamask;
