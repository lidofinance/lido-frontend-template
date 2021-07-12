import { FC, useCallback } from 'react';
import { ConnectWalletProps } from './types';
import ConnectButton from './connectButton';
import iconUrl from 'assets/icons/trust.svg';
import { useConnectorTrust } from '@lido-sdk/web3-react';

const ConnectTrust: FC<ConnectWalletProps> = (props) => {
  const { onConnect, disabled, ...rest } = props;
  const { connect } = useConnectorTrust();

  const handleConnect = useCallback(async () => {
    onConnect?.();
    connect?.();
  }, [onConnect, connect]);

  return (
    <ConnectButton
      {...rest}
      disabled={disabled || !connect}
      iconSrc={iconUrl}
      onClick={handleConnect}
    >
      Trust
    </ConnectButton>
  );
};

export default ConnectTrust;
