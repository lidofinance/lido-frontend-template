import { FC, useCallback } from 'react';
import { ConnectWalletProps } from './types';
import ConnectButton from './connectButton';
import iconUrl from 'assets/icons/mathwallet.svg';
import { useConnectorMathWallet } from '@lido-sdk/web3-react';

const ConnectMathWallet: FC<ConnectWalletProps> = (props) => {
  const { onConnect, ...rest } = props;
  const { connect } = useConnectorMathWallet();

  const handleConnect = useCallback(async () => {
    onConnect?.();
    connect();
  }, [onConnect, connect]);

  return (
    <ConnectButton {...rest} iconSrc={iconUrl} onClick={handleConnect}>
      MathWallet
    </ConnectButton>
  );
};

export default ConnectMathWallet;
