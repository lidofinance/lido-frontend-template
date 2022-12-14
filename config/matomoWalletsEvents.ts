import { MatomoEventType, trackEvent } from '@lidofinance/analytics-matomo';
import { Metrics as WalletsMetrics } from 'reef-knot';

export const enum MATOMO_WALLETS_EVENTS_TYPES {
  onConnectAmbire = 'onConnectAmbire',
  onConnectBlockchaincom = 'onConnectBlockchaincom',
  onConnectBrave = 'onConnectBrave',
  onConnectCoin98 = 'onConnectCoin98',
  onConnectCoinbase = 'onConnectCoinbase',
  onConnectExodus = 'onConnectExodus',
  onConnectGamestop = 'onConnectGamestop',
  onConnectImToken = 'onConnectImToken',
  onConnectLedger = 'onConnectLedger',
  onConnectMathWallet = 'onConnectMathWallet',
  onConnectMetamask = 'onConnectMetamask',
  onConnectOperaWallet = 'onConnectOperaWallet',
  onConnectTally = 'onConnectTally',
  onConnectTrust = 'onConnectTrust',
  onConnectWC = 'onConnectWC',
  onConnectXdefi = 'onConnectXdefi',
  onConnectZenGo = 'onConnectZenGo',
}

export const MATOMO_WALLETS_EVENTS: Record<
  MATOMO_WALLETS_EVENTS_TYPES,
  MatomoEventType
> = {
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectAmbire]: [
    'Ethereum_Staking_Widget',
    'Connect Ambire wallet',
    'eth_widget_connect_ambire',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectBlockchaincom]: [
    'Ethereum_Staking_Widget',
    'Connect Blockchain.com wallet',
    'eth_widget_connect_blockchaincom',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectBrave]: [
    'Ethereum_Staking_Widget',
    'Connect Brave wallet',
    'eth_widget_connect_brave',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectCoin98]: [
    'Ethereum_Staking_Widget',
    'Connect Coin98 wallet',
    'eth_widget_connect_coin98',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectCoinbase]: [
    'Ethereum_Staking_Widget',
    'Connect Coinbase Wallet wallet',
    'eth_widget_connect_coinbase_wallet',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectExodus]: [
    'Ethereum_Staking_Widget',
    'Connect Exodus wallet',
    'eth_widget_connect_exodus',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectGamestop]: [
    'Ethereum_Staking_Widget',
    'Connect Gamestop wallet',
    'eth_widget_connect_gamestop',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectImToken]: [
    'Ethereum_Staking_Widget',
    'Connect imToken wallet',
    'eth_widget_connect_imtoken',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectLedger]: [
    'Ethereum_Staking_Widget',
    'Connect Ledger wallet',
    'eth_widget_connect_ledger',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectMathWallet]: [
    'Ethereum_Staking_Widget',
    'Connect MathWallet wallet',
    'eth_widget_connect_mathwallet',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectMetamask]: [
    'Ethereum_Staking_Widget',
    'Connect Metamask wallet',
    'eth_widget_connect_metamask',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectOperaWallet]: [
    'Ethereum_Staking_Widget',
    'Connect Opera wallet',
    'eth_widget_connect_opera',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectTally]: [
    'Ethereum_Staking_Widget',
    'Connect Tally wallet',
    'eth_widget_connect_tally',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectTrust]: [
    'Ethereum_Staking_Widget',
    'Connect Trust wallet',
    'eth_widget_connect_trust',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectWC]: [
    'Ethereum_Staking_Widget',
    'Connect WalletConnect wallet',
    'eth_widget_connect_walletconnect',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectXdefi]: [
    'Ethereum_Staking_Widget',
    'Connect XDEFI wallet',
    'eth_widget_connect_xdefi',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectZenGo]: [
    'Ethereum_Staking_Widget',
    'Connect ZenGo wallet',
    'eth_widget_connect_zengo',
  ],
};

export const walletsMetrics: WalletsMetrics = {
  events: {
    connect: {
      handlers: {
        onConnectAmbire: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onConnectAmbire);
        },
        onConnectBlockchaincom: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onConnectBlockchaincom);
        },
        onConnectBrave: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onConnectBrave);
        },
        onConnectCoin98: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onConnectCoin98);
        },
        onConnectCoinbase: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onConnectCoinbase);
        },
        onConnectExodus: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onConnectExodus);
        },
        onConnectGamestop: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onConnectGamestop);
        },
        onConnectImToken: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onConnectImToken);
        },
        onConnectLedger: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onConnectLedger);
        },
        onConnectMathWallet: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onConnectMathWallet);
        },
        onConnectMetamask: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onConnectMetamask);
        },
        onConnectOperaWallet: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onConnectOperaWallet);
        },
        onConnectTally: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onConnectTally);
        },
        onConnectTrust: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onConnectTrust);
        },
        onConnectWC: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onConnectWC);
        },
        onConnectXdefi: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onConnectXdefi);
        },
        onConnectZenGo: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onConnectZenGo);
        },
      },
    },
  },
};
