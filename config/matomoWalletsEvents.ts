import { MatomoEventType, trackEvent } from '@lidofinance/analytics-matomo';
import { Metrics as WalletsMetrics } from 'reef-knot';

export const enum MATOMO_WALLETS_EVENTS_TYPES {
  onClickAmbire = 'onClickAmbire',
  onConnectAmbire = 'onConnectAmbire',
  onClickBlockchaincom = 'onClickBlockchaincom',
  onConnectBlockchaincom = 'onConnectBlockchaincom',
  onClickBrave = 'onClickBrave',
  onConnectBrave = 'onConnectBrave',
  onClickCoin98 = 'onClickCoin98',
  onConnectCoin98 = 'onConnectCoin98',
  onClickCoinbase = 'onClickCoinbase',
  onConnectCoinbase = 'onConnectCoinbase',
  onClickExodus = 'onClickExodus',
  onConnectExodus = 'onConnectExodus',
  onClickGamestop = 'onClickGamestop',
  onConnectGamestop = 'onConnectGamestop',
  onClickImToken = 'onClickImToken',
  onConnectImToken = 'onConnectImToken',
  onClickLedger = 'onClickLedger',
  onConnectLedger = 'onConnectLedger',
  onClickMathWallet = 'onClickMathWallet',
  onConnectMathWallet = 'onConnectMathWallet',
  onClickMetamask = 'onClickMetamask',
  onConnectMetamask = 'onConnectMetamask',
  onClickOperaWallet = 'onClickOperaWallet',
  onConnectOperaWallet = 'onConnectOperaWallet',
  onClickTally = 'onClickTally',
  onConnectTally = 'onConnectTally',
  onClickTrust = 'onClickTrust',
  onConnectTrust = 'onConnectTrust',
  onClickWC = 'onClickWC',
  onConnectWC = 'onConnectWC',
  onClickXdefi = 'onClickXdefi',
  onConnectXdefi = 'onConnectXdefi',
  onClickZenGo = 'onClickZenGo',
  onConnectZenGo = 'onConnectZenGo',
}

export const MATOMO_WALLETS_EVENTS: Record<
  MATOMO_WALLETS_EVENTS_TYPES,
  MatomoEventType
> = {
  [MATOMO_WALLETS_EVENTS_TYPES.onClickAmbire]: [
    'Lido_Frontend_Template',
    'Click on Ambire wallet',
    'eth_widget_click_ambire',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectAmbire]: [
    'Lido_Frontend_Template',
    'Connect Ambire wallet',
    'eth_widget_connect_ambire',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickBlockchaincom]: [
    'Lido_Frontend_Template',
    'Click Blockchain.com wallet',
    'eth_widget_click_blockchaincom',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectBlockchaincom]: [
    'Lido_Frontend_Template',
    'Connect Blockchain.com wallet',
    'eth_widget_connect_blockchaincom',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickBrave]: [
    'Lido_Frontend_Template',
    'Click Brave wallet',
    'eth_widget_click_brave',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectBrave]: [
    'Lido_Frontend_Template',
    'Connect Brave wallet',
    'eth_widget_connect_brave',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickCoin98]: [
    'Lido_Frontend_Template',
    'Click Coin98 wallet',
    'eth_widget_click_coin98',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectCoin98]: [
    'Lido_Frontend_Template',
    'Connect Coin98 wallet',
    'eth_widget_connect_coin98',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectCoinbase]: [
    'Lido_Frontend_Template',
    'Connect Coinbase Wallet wallet',
    'eth_widget_connect_coinbase_wallet',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickCoinbase]: [
    'Lido_Frontend_Template',
    'Click Coinbase Wallet wallet',
    'eth_widget_click_coinbase_wallet',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectExodus]: [
    'Lido_Frontend_Template',
    'Connect Exodus wallet',
    'eth_widget_connect_exodus',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickExodus]: [
    'Lido_Frontend_Template',
    'Click Exodus wallet',
    'eth_widget_click_exodus',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectGamestop]: [
    'Lido_Frontend_Template',
    'Connect Gamestop wallet',
    'eth_widget_connect_gamestop',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickGamestop]: [
    'Lido_Frontend_Template',
    'Click Gamestop wallet',
    'eth_widget_click_gamestop',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectImToken]: [
    'Lido_Frontend_Template',
    'Connect imToken wallet',
    'eth_widget_connect_imtoken',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickImToken]: [
    'Lido_Frontend_Template',
    'Click imToken wallet',
    'eth_widget_click_imtoken',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectLedger]: [
    'Lido_Frontend_Template',
    'Connect Ledger wallet',
    'eth_widget_connect_ledger',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickLedger]: [
    'Lido_Frontend_Template',
    'Click Ledger wallet',
    'eth_widget_click_ledger',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectMathWallet]: [
    'Lido_Frontend_Template',
    'Connect MathWallet wallet',
    'eth_widget_connect_mathwallet',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickMathWallet]: [
    'Lido_Frontend_Template',
    'Click MathWallet wallet',
    'eth_widget_click_mathwallet',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectMetamask]: [
    'Lido_Frontend_Template',
    'Connect Metamask wallet',
    'eth_widget_connect_metamask',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickMetamask]: [
    'Lido_Frontend_Template',
    'Click Metamask wallet',
    'eth_widget_click_metamask',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectOperaWallet]: [
    'Lido_Frontend_Template',
    'Connect Opera wallet',
    'eth_widget_connect_opera',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickOperaWallet]: [
    'Lido_Frontend_Template',
    'Click Opera wallet',
    'eth_widget_click_opera',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectTally]: [
    'Lido_Frontend_Template',
    'Connect Tally wallet',
    'eth_widget_connect_tally',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickTally]: [
    'Lido_Frontend_Template',
    'Click Tally wallet',
    'eth_widget_click_tally',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectTrust]: [
    'Lido_Frontend_Template',
    'Connect Trust wallet',
    'eth_widget_connect_trust',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickTrust]: [
    'Lido_Frontend_Template',
    'Click Trust wallet',
    'eth_widget_click_trust',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectWC]: [
    'Lido_Frontend_Template',
    'Connect WalletConnect wallet',
    'eth_widget_connect_walletconnect',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickWC]: [
    'Lido_Frontend_Template',
    'Click WalletConnect wallet',
    'eth_widget_click_walletconnect',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectXdefi]: [
    'Lido_Frontend_Template',
    'Connect XDEFI wallet',
    'eth_widget_connect_xdefi',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickXdefi]: [
    'Lido_Frontend_Template',
    'Click XDEFI wallet',
    'eth_widget_click_xdefi',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectZenGo]: [
    'Lido_Frontend_Template',
    'Connect ZenGo wallet',
    'eth_widget_connect_zengo',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickZenGo]: [
    'Lido_Frontend_Template',
    'Click ZenGo wallet',
    'eth_widget_click_zengo',
  ],
};

export const walletsMetrics: WalletsMetrics = {
  events: {
    click: {
      handlers: {
        onClickAmbire: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onClickAmbire);
        },
        onClickBlockchaincom: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onClickBlockchaincom);
        },
        onClickBrave: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onClickBrave);
        },
        onClickCoin98: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onClickCoin98);
        },
        onClickCoinbase: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onClickCoinbase);
        },
        onClickExodus: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onClickExodus);
        },
        onClickGamestop: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onClickGamestop);
        },
        onClickImToken: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onClickImToken);
        },
        onClickLedger: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onClickLedger);
        },
        onClickMathWallet: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onClickMathWallet);
        },
        onClickMetamask: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onClickMetamask);
        },
        onClickOperaWallet: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onClickOperaWallet);
        },
        onClickTally: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onClickTally);
        },
        onClickTrust: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onClickTrust);
        },
        onClickWC: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onClickWC);
        },
        onClickXdefi: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onClickXdefi);
        },
        onClickZenGo: () => {
          trackEvent(...MATOMO_WALLETS_EVENTS.onClickZenGo);
        },
      },
    },
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
