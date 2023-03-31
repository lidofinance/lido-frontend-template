import { BigNumber } from "ethers";
import { FC } from "react";
import { BlockProps } from "@lidofinance/lido-ui";
export const formatFloorEtherBalance: (balance?: BigNumber, maxDecimalDigits?: number) => string;
type FormatTokenComponent = FC<{
    symbol: string;
    amount?: BigNumber;
    approx?: boolean;
}>;
export const FormatToken: FormatTokenComponent;
type TokenToWalletComponent = FC<{
    address: string;
}>;
export const TokenToWallet: TokenToWalletComponent;
export type FallbackWalletComponent = FC<BlockProps>;
export const WalletFallback: FallbackWalletComponent;

//# sourceMappingURL=index.d.ts.map
