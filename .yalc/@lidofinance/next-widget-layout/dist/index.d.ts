import React, { FC, ReactNode, PropsWithChildren } from "react";
import { LidoLinkProps } from "@lidofinance/next-ui-primitives";
export * from 'styled-components';
export const Footer: FC;
export type NavigationLinkProps = LidoLinkProps & {
    icon: React.ReactNode;
    title: string;
    href: string;
};
export const NavigationLink: FC<NavigationLinkProps>;
export type NavigationProps = {
    links?: NavigationLinkProps[] | undefined;
};
export const Navigation: FC<NavigationProps>;
export type HeaderProps = {
    headerActions: ReactNode;
    navigation?: NavigationLinkProps[] | undefined;
};
export const Header: FC<HeaderProps>;
export const Main: FC<PropsWithChildren>;
export const LayoutTitle: import("styled-components").StyledComponent<"h1", import("styled-components").DefaultTheme, {}, never>;
export const LayoutSubTitle: import("styled-components").StyledComponent<"h2", import("styled-components").DefaultTheme, {}, never>;

//# sourceMappingURL=index.d.ts.map
