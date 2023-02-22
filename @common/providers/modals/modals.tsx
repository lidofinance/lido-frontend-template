import {
  createContext,
  useMemo,
  useCallback,
  memo,
  useState,
  FC,
  PropsWithChildren,
} from 'react';
import { WalletsModalForEth } from 'reef-knot';
import { useThemeToggle } from '@lidofinance/lido-ui';
import WalletModal from '@common/modals/walletModal';

import { MODAL } from './enums';
import { ModalContextValue, ModalProviderProps } from './types';

export const ModalContext = createContext({} as ModalContextValue);

const ModalProvider: FC<PropsWithChildren<ModalProviderProps>> = ({
  children,
  walletsMetrics,
  hiddenWallets,
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
        // Controlled exception!!!
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        hiddenWallets={hiddenWallets}
        {...common}
      />
    </ModalContext.Provider>
  );
};

export default memo<FC<PropsWithChildren<ModalProviderProps>>>(ModalProvider);
