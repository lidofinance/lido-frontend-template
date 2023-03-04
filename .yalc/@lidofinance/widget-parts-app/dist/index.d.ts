import React, { FC, PropsWithChildren } from "react";
import { ProviderWeb3Props } from "@reef-knot/web3-react";
import { ProviderWalletModalProps } from "@lidofinance/widget-parts-wallet-modal";
export interface INavigationLink {
    icon: React.ReactNode;
    title: string;
    href: string;
    external?: boolean;
}
type WidgetAppProps = {
    pages: INavigationLink[];
    web3: ProviderWeb3Props;
    reefKnot: ProviderWalletModalProps;
};
export const WidgetApp: FC<PropsWithChildren<WidgetAppProps>>;

//# sourceMappingURL=index.d.ts.map
