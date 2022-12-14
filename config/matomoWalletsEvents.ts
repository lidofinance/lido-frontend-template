import { MatomoEventType, trackEvent } from '@lidofinance/analytics-matomo';
import { Metrics as WalletsMetrics } from 'reef-knot';

const MATOMO_EVENT_CATEGORY = 'Lido_Frontend_Template';

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
    MATOMO_EVENT_CATEGORY,
    'Click on Ambire wallet',
    'template_widget_click_ambire',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectAmbire]: [
    MATOMO_EVENT_CATEGORY,
    'Connect Ambire wallet',
    'template_widget_connect_ambire',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickBlockchaincom]: [
    MATOMO_EVENT_CATEGORY,
    'Click Blockchain.com wallet',
    'template_widget_click_blockchaincom',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectBlockchaincom]: [
    MATOMO_EVENT_CATEGORY,
    'Connect Blockchain.com wallet',
    'template_widget_connect_blockchaincom',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickBrave]: [
    MATOMO_EVENT_CATEGORY,
    'Click Brave wallet',
    'template_widget_click_brave',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectBrave]: [
    MATOMO_EVENT_CATEGORY,
    'Connect Brave wallet',
    'template_widget_connect_brave',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickCoin98]: [
    MATOMO_EVENT_CATEGORY,
    'Click Coin98 wallet',
    'template_widget_click_coin98',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectCoin98]: [
    MATOMO_EVENT_CATEGORY,
    'Connect Coin98 wallet',
    'template_widget_connect_coin98',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectCoinbase]: [
    MATOMO_EVENT_CATEGORY,
    'Connect Coinbase Wallet wallet',
    'template_widget_connect_coinbase_wallet',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickCoinbase]: [
    MATOMO_EVENT_CATEGORY,
    'Click Coinbase Wallet wallet',
    'template_widget_click_coinbase_wallet',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectExodus]: [
    MATOMO_EVENT_CATEGORY,
    'Connect Exodus wallet',
    'template_widget_connect_exodus',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickExodus]: [
    MATOMO_EVENT_CATEGORY,
    'Click Exodus wallet',
    'template_widget_click_exodus',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectGamestop]: [
    MATOMO_EVENT_CATEGORY,
    'Connect Gamestop wallet',
    'template_widget_connect_gamestop',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickGamestop]: [
    MATOMO_EVENT_CATEGORY,
    'Click Gamestop wallet',
    'template_widget_click_gamestop',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectImToken]: [
    MATOMO_EVENT_CATEGORY,
    'Connect imToken wallet',
    'template_widget_connect_imtoken',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickImToken]: [
    MATOMO_EVENT_CATEGORY,
    'Click imToken wallet',
    'template_widget_click_imtoken',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectLedger]: [
    MATOMO_EVENT_CATEGORY,
    'Connect Ledger wallet',
    'template_widget_connect_ledger',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickLedger]: [
    MATOMO_EVENT_CATEGORY,
    'Click Ledger wallet',
    'template_widget_click_ledger',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectMathWallet]: [
    MATOMO_EVENT_CATEGORY,
    'Connect MathWallet wallet',
    'template_widget_connect_mathwallet',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickMathWallet]: [
    MATOMO_EVENT_CATEGORY,
    'Click MathWallet wallet',
    'template_widget_click_mathwallet',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectMetamask]: [
    MATOMO_EVENT_CATEGORY,
    'Connect Metamask wallet',
    'template_widget_connect_metamask',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickMetamask]: [
    MATOMO_EVENT_CATEGORY,
    'Click Metamask wallet',
    'template_widget_click_metamask',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectOperaWallet]: [
    MATOMO_EVENT_CATEGORY,
    'Connect Opera wallet',
    'template_widget_connect_opera',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickOperaWallet]: [
    MATOMO_EVENT_CATEGORY,
    'Click Opera wallet',
    'template_widget_click_opera',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectTally]: [
    MATOMO_EVENT_CATEGORY,
    'Connect Tally wallet',
    'template_widget_connect_tally',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickTally]: [
    MATOMO_EVENT_CATEGORY,
    'Click Tally wallet',
    'template_widget_click_tally',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectTrust]: [
    MATOMO_EVENT_CATEGORY,
    'Connect Trust wallet',
    'template_widget_connect_trust',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickTrust]: [
    MATOMO_EVENT_CATEGORY,
    'Click Trust wallet',
    'template_widgett_click_trust',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectWC]: [
    MATOMO_EVENT_CATEGORY,
    'Connect WalletConnect wallet',
    'template_widget_connect_walletconnect',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickWC]: [
    MATOMO_EVENT_CATEGORY,
    'Click WalletConnect wallet',
    'template_widget_click_walletconnect',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectXdefi]: [
    MATOMO_EVENT_CATEGORY,
    'Connect XDEFI wallet',
    'template_widget_connect_xdefi',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickXdefi]: [
    MATOMO_EVENT_CATEGORY,
    'Click XDEFI wallet',
    'template_widget_click_xdefi',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectZenGo]: [
    MATOMO_EVENT_CATEGORY,
    'Connect ZenGo wallet',
    'template_widget_connect_zengo',
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickZenGo]: [
    MATOMO_EVENT_CATEGORY,
    'Click ZenGo wallet',
    'template_widget_click_zengo',
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
