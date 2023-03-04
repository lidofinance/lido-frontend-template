import React, { FC } from "react";
import { ModalProps } from "@lidofinance/lido-ui";
import { Metrics } from "@reef-knot/connect-wallet-modal";
export const WalletModal: FC<ModalProps>;
export enum WALLET_MODAL {
    connect = 0,
    wallet = 1
}
export type ProviderWalletModalProps = {
    walletsMetrics: Metrics;
    hiddenWallets?: WalletId[];
};
export type ContextWalletModalValue = {
    openModal: (wModal: WALLET_MODAL) => void;
    closeModal: () => void;
};
export const WALLET_IDS: {
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
export type WalletId = (typeof WALLET_IDS)[keyof typeof WALLET_IDS];
export const ProviderWalletModal: React.MemoExoticComponent<React.FC<React.PropsWithChildren<ProviderWalletModalProps>>>;
type UseModal = (wModal: WALLET_MODAL) => {
    openModal: () => void;
    closeModal: () => void;
};
export const useModal: UseModal;

//# sourceMappingURL=index.d.ts.map
