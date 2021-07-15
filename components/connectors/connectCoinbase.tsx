import { FC, useCallback } from 'react';
import { ConnectWalletProps } from './types';
import ConnectButton from './connectButton';
import iconUrl from 'assets/icons/coinbase.svg';
import { useConnectorCoinbase } from '@lido-sdk/web3-react';

const ConnectCoinbase: FC<ConnectWalletProps> = (props) => {
  const { onConnect, ...rest } = props;
  const { connect } = useConnectorCoinbase();

  const handleConnect = useCallback(async () => {
    onConnect?.();
    connect();
  }, [onConnect, connect]);

  return (
    <ConnectButton {...rest} iconSrc={iconUrl} onClick={handleConnect}>
      Coinbase Wallet
    </ConnectButton>
  );
};

export default ConnectCoinbase;
