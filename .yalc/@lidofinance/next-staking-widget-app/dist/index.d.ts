import React, { FC, PropsWithChildren } from "react";
import { ProviderWeb3Props } from "@reef-knot/web3-react";
import { ProviderWalletModalProps } from "@lidofinance/eth-ui-wallet-modal";
export interface INavigationLink {
    icon: React.ReactNode;
    title: string;
    href: string;
    external?: boolean;
}
export const LayoutTitle: import("styled-components").StyledComponent<"h1", any, {}, never>;
export const LayoutSubTitle: import("styled-components").StyledComponent<"h2", any, {}, never>;
type WidgetAppProps = {
    pages: INavigationLink[];
    web3: ProviderWeb3Props;
    reefKnot: ProviderWalletModalProps;
};
export const WidgetApp: FC<PropsWithChildren<WidgetAppProps>>;

//# sourceMappingURL=index.d.ts.map
