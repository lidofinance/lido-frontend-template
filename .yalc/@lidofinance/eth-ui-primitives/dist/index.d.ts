import { FC } from "react";
import { BigNumber } from "@ethersproject/bignumber";
import { BigNumber as _BigNumber1 } from "ethers";
type FormatTokenComponent = FC<{
    symbol: string;
    amount?: BigNumber;
    approx?: boolean;
}>;
export const FormatToken: FormatTokenComponent;
export const formatEtherFloorBalance: (balance?: _BigNumber1, maxDecimalDigits?: number) => string;

//# sourceMappingURL=index.d.ts.map
