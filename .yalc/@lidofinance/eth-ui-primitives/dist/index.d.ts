import { BigNumber } from "ethers";
import { FC } from "react";
export const formatFloorEtherBalance: (balance?: BigNumber, maxDecimalDigits?: number) => string;
type FormatTokenComponent = FC<{
    symbol: string;
    amount?: BigNumber;
    approx?: boolean;
}>;
export const FormatToken: FormatTokenComponent;

//# sourceMappingURL=index.d.ts.map
