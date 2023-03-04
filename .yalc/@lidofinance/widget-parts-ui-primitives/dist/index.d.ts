import React, { FC, ReactNode } from "react";
import { IdenticonBadgeProps, BlockProps } from "@lidofinance/lido-ui";
import { BigNumber } from "ethers";
import { BigNumber as _BigNumber1 } from "@ethersproject/bignumber";
import { LinkProps } from "next/link";
export type ComponentProps<T extends keyof JSX.IntrinsicElements, P extends Record<string, unknown> = {
    children?: ReactNode;
}> = Omit<JSX.IntrinsicElements[T], 'ref' | 'key' | keyof P> & P;
export type Component<T extends keyof JSX.IntrinsicElements, P extends Record<string, unknown> = {
    children?: ReactNode;
}> = FC<ComponentProps<T, P>>;
type AddressBadgeComponent = Component<'div', Omit<IdenticonBadgeProps, 'address' | 'as'> & {
    address?: string | null;
}>;
export const AddressBadge: AddressBadgeComponent;
type FormatBalance = (balance?: BigNumber, maxDecimalDigits?: number) => string;
export const formatBalance: FormatBalance;
type FormatTokenComponent = Component<'span', {
    symbol: string;
    amount?: _BigNumber1;
    approx?: boolean;
}>;
export const FormatToken: FormatTokenComponent;
export type LocalLinkProps = LinkProps & {
    href: string;
};
export const LocalLink: FC<React.PropsWithChildren<LocalLinkProps>>;
type SectionType = Component<'section', {
    title?: React.ReactNode;
    headerDecorator?: React.ReactNode;
}>;
export const Section: SectionType;
export type WalletCardComponent = FC<BlockProps>;
export const WalletCard: WalletCardComponent;
export type FallbackWalletComponent = WalletCardComponent;
export const FallbackWallet: FallbackWalletComponent;
type TokenToWalletComponent = Component<'button', {
    address: string;
}>;
export const TokenToWallet: TokenToWalletComponent;
export const WalletCardAccount: Component<'div', {
    account?: string | null;
}>;
export type WalletCardBalanceComponent = Component<'div', {
    title: React.ReactNode;
    value: React.ReactNode;
    small?: boolean;
    loading?: boolean;
    extra?: React.ReactNode;
}>;
export const WalletCardBalance: WalletCardBalanceComponent;
export const DATA_UNAVAILABLE = "N/A";
export const useCopyToClipboard: (text: string) => (() => void);

//# sourceMappingURL=index.d.ts.map
