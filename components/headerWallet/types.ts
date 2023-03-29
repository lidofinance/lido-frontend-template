import { FC, ReactNode } from 'react';

export interface IHeaderWallet {
  leftSlot: ReactNode | FC;
  connectedWalletInfoButton: FC;
  walletConnectButton: FC;
}
