import React, { FC, ReactNode, PropsWithChildren } from "react";
import { ContainerProps } from "@lidofinance/lido-ui";
import { LidoLinkProps } from "@lidofinance/next-ui-primitives";
export * from 'styled-components';
export const MOBILE_MAX_WIDTH = 880;
export const MOBILE_MEDIA: string;
export const FooterStyle: import("styled-components").StyledComponent<(props: any) => import("react").JSX.Element, import("styled-components").DefaultTheme, {}, never>;
export const FooterLink: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<Omit<import("react").ClassAttributes<HTMLAnchorElement> & import("react").AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: keyof JSX.IntrinsicElements | undefined;
    forwardedAs?: keyof JSX.IntrinsicElements | undefined;
}, "ref"> & {
    fadeVisited?: boolean | undefined;
} & import("react").RefAttributes<HTMLAnchorElement>>, import("styled-components").DefaultTheme, {}, never>;
export const LogoLidoStyle: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<Omit<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & {
    as?: keyof JSX.IntrinsicElements | undefined;
    forwardedAs?: keyof JSX.IntrinsicElements | undefined;
}, "ref"> & import("react").RefAttributes<HTMLDivElement>>, import("styled-components").DefaultTheme, {}, never>;
export const FooterDivider: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export const Footer: FC;
export const HeaderStyle: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<{
    size?: "content" | "full" | "tight" | undefined;
} & Omit<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & {
    as?: keyof JSX.IntrinsicElements | undefined;
    forwardedAs?: keyof JSX.IntrinsicElements | undefined;
}, "ref" | "size"> & import("react").RefAttributes<HTMLDivElement>>, import("styled-components").DefaultTheme, {}, never>;
export const HeaderLogoStyle: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export type HeaderProps = ContainerProps & {
    headerActions: ReactNode;
};
export const Header: FC<PropsWithChildren<HeaderProps>>;
export const MainStyle: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<{
    size?: "content" | "full" | "tight" | undefined;
} & Omit<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & {
    as?: keyof JSX.IntrinsicElements | undefined;
    forwardedAs?: keyof JSX.IntrinsicElements | undefined;
}, "ref" | "size"> & import("react").RefAttributes<HTMLDivElement>>, import("styled-components").DefaultTheme, {}, never>;
export const Main: FC<PropsWithChildren<ContainerProps>>;
export const NavigationAdaptive: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export const NavigationLinkStyle: import("styled-components").StyledComponent<import("react").FC<import("react").PropsWithChildren<import("@lidofinance/next-ui-primitives").LidoLinkProps>>, import("styled-components").DefaultTheme, {
    $active: boolean;
}, never>;
export type NavigationLinkProps = LidoLinkProps & {
    icon: React.ReactNode;
    title: string;
    href: string;
};
export const NavigationLink: FC<NavigationLinkProps>;
export const LayoutTitle: import("styled-components").StyledComponent<"h1", import("styled-components").DefaultTheme, {}, never>;
export const LayoutSubTitle: import("styled-components").StyledComponent<"h2", import("styled-components").DefaultTheme, {}, never>;

//# sourceMappingURL=index.d.ts.map
