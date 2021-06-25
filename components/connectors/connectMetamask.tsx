import { FC, useCallback } from 'react';
import { ConnectWalletProps } from './types';
import ConnectButton from './connectButton';
import iconUrl from 'assets/icons/metamask.svg';
import { useConnect, useConfig } from 'hooks';
import { openWindow } from 'utils';

const ConnectMetamask: FC<ConnectWalletProps> = (props) => {
  const { onConnect, ...rest } = props;
  const { connectors } = useConfig();
  const connect = useConnect();
  const connector = connectors.metamask;

  const openInWallet = useCallback(() => {
    const url = encodeURIComponent(window.location.host);
    openWindow(`https://metamask.app.link/dapp/${url}`);

    return;
  }, []);

  const handleConnect = useCallback(async () => {
    const hasInjected = typeof window !== 'undefined' && 'ethereum' in window;

    if (!hasInjected) {
      openInWallet();
      return;
    }

    onConnect?.();
    await connect(connector);
  }, [onConnect, connect, connector, openInWallet]);

  return (
    <ConnectButton {...rest} iconSrc={iconUrl} onClick={handleConnect}>
      Metamask
    </ConnectButton>
  );
};

export default ConnectMetamask;
