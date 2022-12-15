import { MatomoEventType, trackEvent } from '@lidofinance/analytics-matomo';
import { Metrics as WalletsMetrics } from 'reef-knot';

// Should be change for Lido on X project!!!
// For example:
// - Ethereum_Staking_Widget
// - Kusama_Stacking_Widget
const MATOMO_EVENT_CATEGORY = 'Lido_Frontend_Template';

// Should be change for Lido on X project!!!
// For example:
// - eth_widget_
// - ksm_widget_
const getMatomoEventNameWithPrefix = (name: string) =>
  `template_widget_${name}`;

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
    getMatomoEventNameWithPrefix('click_ambire'),
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectAmbire]: [
    MATOMO_EVENT_CATEGORY,
    'Connect Ambire wallet',
    getMatomoEventNameWithPrefix('connect_ambire'),
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickBlockchaincom]: [
    MATOMO_EVENT_CATEGORY,
    'Click Blockchain.com wallet',
    getMatomoEventNameWithPrefix('click_blockchaincom'),
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectBlockchaincom]: [
    MATOMO_EVENT_CATEGORY,
    'Connect Blockchain.com wallet',
    getMatomoEventNameWithPrefix('connect_blockchaincom'),
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickBrave]: [
    MATOMO_EVENT_CATEGORY,
    'Click Brave wallet',
    getMatomoEventNameWithPrefix('click_brave'),
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectBrave]: [
    MATOMO_EVENT_CATEGORY,
    'Connect Brave wallet',
    getMatomoEventNameWithPrefix('connect_brave'),
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickCoin98]: [
    MATOMO_EVENT_CATEGORY,
    'Click Coin98 wallet',
    getMatomoEventNameWithPrefix('click_coin98'),
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectCoin98]: [
    MATOMO_EVENT_CATEGORY,
    'Connect Coin98 wallet',
    getMatomoEventNameWithPrefix('connect_coin98'),
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectCoinbase]: [
    MATOMO_EVENT_CATEGORY,
    'Connect Coinbase Wallet wallet',
    getMatomoEventNameWithPrefix('connect_coinbase_wallet'),
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickCoinbase]: [
    MATOMO_EVENT_CATEGORY,
    'Click Coinbase Wallet wallet',
    getMatomoEventNameWithPrefix('click_coinbase_wallet'),
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectExodus]: [
    MATOMO_EVENT_CATEGORY,
    'Connect Exodus wallet',
    getMatomoEventNameWithPrefix('connect_exodus'),
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickExodus]: [
    MATOMO_EVENT_CATEGORY,
    'Click Exodus wallet',
    getMatomoEventNameWithPrefix('click_exodus'),
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectGamestop]: [
    MATOMO_EVENT_CATEGORY,
    'Connect Gamestop wallet',
    getMatomoEventNameWithPrefix('connect_gamestop'),
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickGamestop]: [
    MATOMO_EVENT_CATEGORY,
    'Click Gamestop wallet',
    getMatomoEventNameWithPrefix('click_gamestop'),
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectImToken]: [
    MATOMO_EVENT_CATEGORY,
    'Connect imToken wallet',
    getMatomoEventNameWithPrefix('connect_imtoken'),
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickImToken]: [
    MATOMO_EVENT_CATEGORY,
    'Click imToken wallet',
    getMatomoEventNameWithPrefix('click_imtoken'),
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectLedger]: [
    MATOMO_EVENT_CATEGORY,
    'Connect Ledger wallet',
    getMatomoEventNameWithPrefix('connect_ledger'),
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickLedger]: [
    MATOMO_EVENT_CATEGORY,
    'Click Ledger wallet',
    getMatomoEventNameWithPrefix('click_ledger'),
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectMathWallet]: [
    MATOMO_EVENT_CATEGORY,
    'Connect MathWallet wallet',
    getMatomoEventNameWithPrefix('connect_mathwallet'),
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickMathWallet]: [
    MATOMO_EVENT_CATEGORY,
    'Click MathWallet wallet',
    getMatomoEventNameWithPrefix('click_mathwallet'),
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectMetamask]: [
    MATOMO_EVENT_CATEGORY,
    'Connect Metamask wallet',
    getMatomoEventNameWithPrefix('connect_metamask'),
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickMetamask]: [
    MATOMO_EVENT_CATEGORY,
    'Click Metamask wallet',
    getMatomoEventNameWithPrefix('click_metamask'),
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectOperaWallet]: [
    MATOMO_EVENT_CATEGORY,
    'Connect Opera wallet',
    getMatomoEventNameWithPrefix('connect_opera'),
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickOperaWallet]: [
    MATOMO_EVENT_CATEGORY,
    'Click Opera wallet',
    getMatomoEventNameWithPrefix('click_opera'),
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectTally]: [
    MATOMO_EVENT_CATEGORY,
    'Connect Tally wallet',
    getMatomoEventNameWithPrefix('connect_tally'),
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickTally]: [
    MATOMO_EVENT_CATEGORY,
    'Click Tally wallet',
    getMatomoEventNameWithPrefix('click_tally'),
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectTrust]: [
    MATOMO_EVENT_CATEGORY,
    'Connect Trust wallet',
    getMatomoEventNameWithPrefix('connect_trust'),
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickTrust]: [
    MATOMO_EVENT_CATEGORY,
    'Click Trust wallet',
    getMatomoEventNameWithPrefix('click_trust'),
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectWC]: [
    MATOMO_EVENT_CATEGORY,
    'Connect WalletConnect wallet',
    getMatomoEventNameWithPrefix('connect_walletconnect'),
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickWC]: [
    MATOMO_EVENT_CATEGORY,
    'Click WalletConnect wallet',
    getMatomoEventNameWithPrefix('click_walletconnect'),
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectXdefi]: [
    MATOMO_EVENT_CATEGORY,
    'Connect XDEFI wallet',
    getMatomoEventNameWithPrefix('connect_xdefi'),
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickXdefi]: [
    MATOMO_EVENT_CATEGORY,
    'Click XDEFI wallet',
    getMatomoEventNameWithPrefix('click_xdefi'),
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onConnectZenGo]: [
    MATOMO_EVENT_CATEGORY,
    'Connect ZenGo wallet',
    getMatomoEventNameWithPrefix('connect_zengo'),
  ],
  [MATOMO_WALLETS_EVENTS_TYPES.onClickZenGo]: [
    MATOMO_EVENT_CATEGORY,
    'Click ZenGo wallet',
    getMatomoEventNameWithPrefix('click_zengo'),
  ],
};

console.log(MATOMO_WALLETS_EVENTS);

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
