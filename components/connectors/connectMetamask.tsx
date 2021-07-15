import { FC, useCallback } from 'react';
import { ConnectWalletProps } from './types';
import ConnectButton from './connectButton';
import iconUrl from 'assets/icons/metamask.svg';
import { useConnectorMetamask } from '@lido-sdk/web3-react';

const ConnectMetamask: FC<ConnectWalletProps> = (props) => {
  const { onConnect, ...rest } = props;
  const { connect } = useConnectorMetamask();

  const handleConnect = useCallback(async () => {
    onConnect?.();
    connect();
  }, [onConnect, connect]);

  return (
    <ConnectButton {...rest} iconSrc={iconUrl} onClick={handleConnect}>
      Metamask
    </ConnectButton>
  );
};

export default ConnectMetamask;
