import { ProviderWeb3Props } from '@reef-knot/web3-react';
import { ProviderWalletModalProps } from '@lidofinance/widget-parts-wallet-modal';
import { INavigationLink } from './layoutComponents/header/components/navigation/components/navigationLink';
export type WidgetAppProps = {
    pages: INavigationLink[];
    web3: ProviderWeb3Props;
    reefKnot: ProviderWalletModalProps;
};
