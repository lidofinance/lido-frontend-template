import React, { FC, PropsWithChildren } from "react";
import { BlockProps } from "@lidofinance/lido-ui";
export type WalletCardComponent = FC<BlockProps>;
export const WalletCard: WalletCardComponent;
type WalletCardAccountProps = {
    account?: string | null;
    onClickCb: (T: unknown) => unknown;
};
export const WalletCardAccount: FC<WalletCardAccountProps>;
export type WalletCardBalanceComponent = FC<PropsWithChildren<{
    title: React.ReactNode;
    value: React.ReactNode;
    small?: boolean;
    loading?: boolean;
    extra?: React.ReactNode;
}>>;
export const WalletCardBalance: WalletCardBalanceComponent;
export const WalletCardRow: FC<PropsWithChildren>;
export type FallbackWalletComponent = FC<BlockProps & {
    error: string;
}>;
export const WalletFallback: FallbackWalletComponent;
export const useCopyToClipboard: (text: string) => (() => void);

//# sourceMappingURL=index.d.ts.map
