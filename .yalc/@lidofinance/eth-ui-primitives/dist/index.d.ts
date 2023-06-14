import { BigNumber } from "ethers";
import { FC } from "react";
import { LidoComponentProps, BlockProps } from "@lidofinance/lido-ui";
export const formatFloorEtherBalance: (balance?: BigNumber, decimalDigits?: number) => string;
type FormatTokenType = FC<LidoComponentProps<'span', {
    symbol: string;
    amount?: BigNumber;
    approx?: boolean;
}>>;
export const FormatToken: FormatTokenType;
export * from 'styled-components';
type TokenToWalletType = FC<LidoComponentProps<'button', {
    address: string;
}>>;
export const TokenToWallet: TokenToWalletType;
export type FallbackWalletComponent = FC<BlockProps>;
export const WalletFallback: FallbackWalletComponent;

//# sourceMappingURL=index.d.ts.map
