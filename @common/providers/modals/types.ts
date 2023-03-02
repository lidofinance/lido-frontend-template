import { Metrics as WalletsMetrics } from 'reef-knot';
import { MODAL } from './enums';

export type ModalProviderProps = {
  walletsMetrics: WalletsMetrics;
  hiddenWallets?: WalletId[];
};

export type ModalContextValue = {
  openModal: (modal: MODAL) => void;
  closeModal: () => void;
};

// Deprecated!!!
export const WALLET_IDS = {
  METAMASK: 'Metamask',
  WALLET_CONNECT: 'WalletConnect',
  LEDGER: 'Ledger',
  COINBASE: 'Coinbase',
  TRUST: 'Trust',
  IM_TOKEN: 'ImToken',
  COIN98: 'Coin98',
  MATH_WALLET: 'MathWallet',
  TALLY: 'Tally',
  AMBIRE: 'Ambire',
  BLOCKCHAINCOM: 'Blockchain.com Wallet',
  ZENGO: 'ZenGo',
  BRAVE: 'Brave Wallet',
  OPERA: 'Opera Wallet',
  EXODUS: 'Exodus',
  GAMESTOP: 'Gamestop',
  XDEFI: 'Xdefi',
  ZERION: 'Zerion',
} as const;

// Deprecated!!!
export type WalletId = typeof WALLET_IDS[keyof typeof WALLET_IDS];
