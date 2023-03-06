import { Metrics as WalletsMetrics } from '@reef-knot/connect-wallet-modal';
import { WALLET_MODAL } from './enums';
export type ProviderWalletModalProps = {
    walletsMetrics: WalletsMetrics;
    hiddenWallets?: WalletId[];
};
export type ContextWalletModalValue = {
    openModal: (wModal: WALLET_MODAL) => void;
    closeModal: () => void;
};
export declare const WALLET_IDS: {
    readonly METAMASK: "Metamask";
    readonly WALLET_CONNECT: "WalletConnect";
    readonly LEDGER: "Ledger";
    readonly COINBASE: "Coinbase";
    readonly TRUST: "Trust";
    readonly IM_TOKEN: "ImToken";
    readonly COIN98: "Coin98";
    readonly MATH_WALLET: "MathWallet";
    readonly TALLY: "Tally";
    readonly AMBIRE: "Ambire";
    readonly BLOCKCHAINCOM: "Blockchain.com Wallet";
    readonly ZENGO: "ZenGo";
    readonly BRAVE: "Brave Wallet";
    readonly OPERA: "Opera Wallet";
    readonly EXODUS: "Exodus";
    readonly GAMESTOP: "Gamestop";
    readonly XDEFI: "Xdefi";
    readonly ZERION: "Zerion";
};
export type WalletId = typeof WALLET_IDS[keyof typeof WALLET_IDS];
