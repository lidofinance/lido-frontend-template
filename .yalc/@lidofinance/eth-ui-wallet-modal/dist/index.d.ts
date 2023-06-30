import { FC, PropsWithChildren } from "react";
import { ModalProps, ButtonProps } from "@lidofinance/lido-ui";
import { Metrics } from "reef-knot/connect-wallet-modal";
export * from 'styled-components';
export const ConnectedWalletInfoModal: FC<ModalProps>;
export enum WALLET_MODAL {
    connect = 0,
    wallet = 1
}
/** @deprecated will be soon */
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
/** @deprecated will be soon */
export type WalletId = (typeof WALLET_IDS)[keyof typeof WALLET_IDS];
export type ProviderWalletModalProps = {
    walletsMetrics: Metrics;
    hiddenWallets?: WalletId[];
};
export type ContextWalletModalValue = {
    openModal: (wModal: WALLET_MODAL) => void;
    closeModal: () => void;
};
type UseModalType = (wModal: WALLET_MODAL) => {
    openModal: () => void;
    closeModal: () => void;
};
export const useModal: UseModalType;
export const WalletButton: FC<ButtonProps>;
export const WalletConnectButton: FC<ButtonProps>;
export const ProviderWalletModal: FC<PropsWithChildren<ProviderWalletModalProps>>;

//# sourceMappingURL=index.d.ts.map
