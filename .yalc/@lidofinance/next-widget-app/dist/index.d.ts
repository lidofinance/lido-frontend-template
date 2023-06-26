import { FC, PropsWithChildren, ReactNode } from "react";
import { NavigationLinkProps } from "@lidofinance/next-widget-layout";
export type WidgetAppProps = {
    headerActions: ReactNode;
    navigation?: NavigationLinkProps[];
    disableCookiesTooltip?: boolean;
    disableToasts?: boolean;
};
export const WidgetApp: FC<PropsWithChildren<WidgetAppProps>>;
export const WidgetAppEVM: FC<PropsWithChildren<WidgetAppProps>>;

//# sourceMappingURL=index.d.ts.map
