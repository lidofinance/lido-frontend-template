import { CHAINS } from "@lido-sdk/constants";
import { FC, PropsWithChildren, ReactNode } from "react";
import { ProviderWeb3Props } from "reef-knot/web3-react";
import { NavigationLinkProps } from "@lidofinance/next-widget-layout";
import { ProviderWalletModalProps } from "@lidofinance/eth-ui-wallet-modal";
type AppWagmiConfigProps = {
    defaultChain: CHAINS;
    supportedChains: CHAINS[];
    backendRPC: Record<number, string>;
    getBackendRPCPath: (chainId: CHAINS) => string;
    walletconnectProjectId: string;
};
export type WidgetAppProps = {
    headerActions: ReactNode;
    navigationLinks?: NavigationLinkProps[] | undefined;
    disableCookiesTooltip?: boolean | undefined;
    disableToasts?: boolean | undefined;
};
export type WidgetAppEVMProps = WidgetAppProps & {
    wagmi: AppWagmiConfigProps;
    providerWeb3: ProviderWeb3Props;
    reefKnot: ProviderWalletModalProps;
};
export const WidgetApp: FC<PropsWithChildren<WidgetAppProps>>;
export const EVMWidgetApp: FC<PropsWithChildren<WidgetAppEVMProps>>;

//# sourceMappingURL=index.d.ts.map
