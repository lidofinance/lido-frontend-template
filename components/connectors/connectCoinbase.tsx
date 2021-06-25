import { FC, useCallback } from 'react';
import { ConnectWalletProps } from './types';
import ConnectButton from './connectButton';
import iconUrl from 'assets/icons/coinbase.svg';
import { useConnect, useConfig } from 'hooks';

const ConnectCoinbase: FC<ConnectWalletProps> = (props) => {
  const { onConnect, disabled, ...rest } = props;
  const { connectors } = useConfig();
  const connect = useConnect();
  const connector = connectors.coinbase;

  const handleConnect = useCallback(async () => {
    if (!connector) return;

    onConnect?.();
    await connect(connector);
  }, [connect, connector, onConnect]);

  return (
    <ConnectButton
      {...rest}
      disabled={!connector || disabled}
      iconSrc={iconUrl}
      onClick={handleConnect}
    >
      Coinbase Wallet
    </ConnectButton>
  );
};

export default ConnectCoinbase;
