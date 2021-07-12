import { createContext, useMemo, useCallback, memo, useState, FC } from 'react';
import WalletModal from 'components/walletModal';
import WalletModalConnect from 'components/walletModalConnect';

export type ModalContextValue = {
  openModal: (modal: MODAL) => void;
  closeModal: () => void;
};

export enum MODAL {
  connect,
  wallet,
}

export const ModalContext = createContext({} as ModalContextValue);

const ModalProvider: FC = ({ children }) => {
  const [active, setActive] = useState<MODAL | null>(null);

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
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
      <WalletModal open={active === MODAL.wallet} {...common} />
      <WalletModalConnect open={active === MODAL.connect} {...common} />
    </ModalContext.Provider>
  );
};

export default memo<FC>(ModalProvider);
