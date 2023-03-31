import React, { FC, PropsWithChildren } from "react";
import { LinkProps } from "next/link";
import { BlockProps } from "@lidofinance/lido-ui";
export interface FAQItem {
    id: string;
    content: string;
    title: string;
}
export interface FaqProps {
    faqList: FAQItem[];
}
export const Faq: FC<FaqProps>;
export const getFaqList: (list: string[]) => Promise<FAQItem[]>;
export type LocalLinkProps = LinkProps & {
    href: string;
};
export const LocalLink: FC<React.PropsWithChildren<LocalLinkProps>>;
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
export const DATA_UNAVAILABLE = "N/A";
export const useCopyToClipboard: (text: string) => (() => void);
type StandardFetcher = <T>(url: string, params?: RequestInit) => Promise<T>;
export const standardFetcher: StandardFetcher;

//# sourceMappingURL=index.d.ts.map
