import React, { FC, PropsWithChildren, ReactNode } from "react";
export interface INavigationLink {
    icon: React.ReactNode;
    title: string;
    href: string;
    external?: boolean;
}
export const LayoutTitle: import("styled-components").StyledComponent<"h1", import("styled-components").DefaultTheme, {}, never>;
export const LayoutSubTitle: import("styled-components").StyledComponent<"h2", import("styled-components").DefaultTheme, {}, never>;
type WidgetAppProps = {
    connectedWalletInfoButton: ReactNode;
    walletConnectButton: ReactNode;
    providers: FC<PropsWithChildren>;
    walletIsActive: boolean;
    navigation?: INavigationLink[];
    walletActionsLeftSlot?: ReactNode;
};
export const WidgetApp: FC<PropsWithChildren<WidgetAppProps>>;

//# sourceMappingURL=index.d.ts.map
