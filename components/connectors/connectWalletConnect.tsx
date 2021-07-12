import { FC, useCallback } from 'react';
import { ConnectWalletProps } from './types';
import ConnectButton from './connectButton';
import iconUrl from 'assets/icons/walletconnect.svg';
import { useConnectorWalletConnect } from '@lido-sdk/web3-react';

const ConnectWalletConnect: FC<ConnectWalletProps> = (props) => {
  const { onConnect, ...rest } = props;
  const { connect } = useConnectorWalletConnect();

  const handleConnect = useCallback(async () => {
    onConnect?.();
    connect();
  }, [onConnect, connect]);

  return (
    <ConnectButton {...rest} iconSrc={iconUrl} onClick={handleConnect}>
      WalletConnect
    </ConnectButton>
  );
};

export default ConnectWalletConnect;
