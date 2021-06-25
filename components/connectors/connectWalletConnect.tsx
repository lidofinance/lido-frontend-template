import { FC, useCallback } from 'react';
import { ConnectWalletProps } from './types';
import ConnectButton from './connectButton';
import iconUrl from 'assets/icons/walletconnect.svg';
import { useConnect, useConfig } from 'hooks';

const ConnectWalletConnect: FC<ConnectWalletProps> = (props) => {
  const { onConnect, disabled, ...rest } = props;
  const { connectors } = useConfig();
  const connect = useConnect();
  const connector = connectors.walletconnect;

  const handleConnect = useCallback(async () => {
    if (!connector) return;

    onConnect?.();
    connector.deactivate?.();
    await connector.close?.();
    await connect(connector);
  }, [connector, connect, onConnect]);

  return (
    <ConnectButton
      {...rest}
      disabled={!connector || disabled}
      iconSrc={iconUrl}
      onClick={handleConnect}
    >
      WalletConnect
    </ConnectButton>
  );
};

export default ConnectWalletConnect;
