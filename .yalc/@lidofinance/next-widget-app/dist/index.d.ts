import React, { FC, PropsWithChildren, ReactNode } from "react";
import { LidoLinkProps } from "@lidofinance/next-ui-primitives";
export * from 'styled-components';
export type NavigationLinkProps = LidoLinkProps & {
    icon: React.ReactNode;
    title: string;
    href: string;
};
export const LayoutTitle: import("styled-components").StyledComponent<"h1", import("styled-components").DefaultTheme, {}, never>;
export const LayoutSubTitle: import("styled-components").StyledComponent<"h2", import("styled-components").DefaultTheme, {}, never>;
export type WidgetAppProps = {
    headerActions: ReactNode;
    navigation?: NavigationLinkProps[];
};
export const WidgetApp: FC<PropsWithChildren<WidgetAppProps>>;

//# sourceMappingURL=index.d.ts.map
