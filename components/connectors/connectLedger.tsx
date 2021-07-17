import { FC, useCallback } from 'react';
import { ConnectWalletProps } from './types';
import ConnectButton from './connectButton';
import iconUrl from 'assets/icons/ledger.svg';
import { useConnectorLedger } from '@lido-sdk/web3-react';

const ConnectLedger: FC<ConnectWalletProps> = (props) => {
  const { onConnect, disabled, ...rest } = props;
  const { connect } = useConnectorLedger();

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
      Ledger
    </ConnectButton>
  );
};

export default ConnectLedger;
