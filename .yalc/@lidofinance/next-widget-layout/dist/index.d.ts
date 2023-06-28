import React, { FC, ReactNode, PropsWithChildren } from "react";
import { LidoLinkProps } from "@lidofinance/next-ui-primitives";
export * from 'styled-components';
export const Footer: FC;
export type HeaderProps = {
    headerActions: ReactNode;
};
export const Header: FC<HeaderProps>;
export const Main: FC<PropsWithChildren>;
export const NavigationAdaptive: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export type NavigationLinkProps = LidoLinkProps & {
    icon: React.ReactNode;
    title: string;
    href: string;
};
export const NavigationLink: FC<NavigationLinkProps>;
export const LayoutTitle: import("styled-components").StyledComponent<"h1", import("styled-components").DefaultTheme, {}, never>;
export const LayoutSubTitle: import("styled-components").StyledComponent<"h2", import("styled-components").DefaultTheme, {}, never>;

//# sourceMappingURL=index.d.ts.map
