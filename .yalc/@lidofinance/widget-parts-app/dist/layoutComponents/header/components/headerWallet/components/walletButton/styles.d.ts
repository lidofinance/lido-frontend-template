/// <reference types="react" />
export declare const WalledButtonStyle: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<{
    size?: "xs" | "sm" | "md" | "lg" | "xxs" | undefined;
    variant?: "text" | "filled" | "outlined" | "ghost" | "translucent" | undefined;
    color?: "secondary" | "primary" | "error" | "warning" | "success" | undefined;
    fullwidth?: boolean | undefined;
    square?: boolean | undefined;
    loading?: boolean | undefined;
    active?: boolean | undefined;
    as?: undefined;
} & Omit<import("react").ClassAttributes<HTMLButtonElement> & import("react").ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: keyof JSX.IntrinsicElements | undefined;
    forwardedAs?: keyof JSX.IntrinsicElements | undefined;
}, "ref" | "size" | "color" | "as" | "square" | "loading" | "variant" | "fullwidth" | "active"> & import("react").RefAttributes<HTMLButtonElement>>, import("styled-components").DefaultTheme, {}, never>;
export declare const WalledButtonWrapperStyle: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, {}, never>;
export declare const WalledButtonBalanceStyle: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, {}, never>;
export declare const WalledButtonLoaderStyle: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<{
    color?: "text" | "secondary" | "foreground" | undefined;
} & Omit<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & {
    as?: keyof JSX.IntrinsicElements | undefined;
    forwardedAs?: keyof JSX.IntrinsicElements | undefined;
}, "ref" | "color"> & import("react").RefAttributes<HTMLDivElement>>, import("styled-components").DefaultTheme, {}, never>;
