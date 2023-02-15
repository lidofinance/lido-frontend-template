import {
  createContext,
  useMemo,
  useCallback,
  memo,
  useState,
  FC,
  PropsWithChildren,
} from 'react';
import { Metrics as WalletsMetrics } from 'reef-knot';
import { useThemeToggle } from '@lidofinance/lido-ui';
import { WalletsModalForEth } from '@reef-knot/connect-wallet-modal';
import WalletModal from '@common/modals/walletModal';

export type ModalContextValue = {
  openModal: (modal: MODAL) => void;
  closeModal: () => void;
};

export enum MODAL {
  connect,
  wallet,
}

export const ModalContext = createContext({} as ModalContextValue);

// TODO: make like ModalProviderProps.reefKnot.[walletsMetrics, hiddenWallets]?
export type ModalProviderProps = {
  walletsMetrics: WalletsMetrics;
  // TODO: WalletId[] type
  hiddenWallets?: string[];
};

const ModalProvider: FC<PropsWithChildren<ModalProviderProps>> = ({
  children,
  walletsMetrics,
}) => {
  const [active, setActive] = useState<MODAL | null>(null);
  const { themeName } = useThemeToggle();

  const openModal = useCallback((modal: MODAL) => {
    setActive(modal);
  }, []);

  const closeModal = useCallback(() => {
    setActive(null);
  }, []);

  const value = useMemo(
    () => ({
      openModal,
      closeModal,
    }),
    [closeModal, openModal],
  );

  const common = {
    onClose: closeModal,
    shouldInvertWalletIcon: themeName === 'dark',
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
      <WalletModal open={active === MODAL.wallet} {...common} />
      <WalletsModalForEth
        open={active === MODAL.connect}
        metrics={walletsMetrics}
        // TODO: use hiddenWallets
        hiddenWallets={['Opera Wallet']}
        {...common}
      />
    </ModalContext.Provider>
  );
};

export default memo<FC<PropsWithChildren<ModalProviderProps>>>(ModalProvider);
