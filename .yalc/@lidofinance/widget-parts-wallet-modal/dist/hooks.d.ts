import { WALLET_MODAL } from './enums';
type UseModal = (wModal: WALLET_MODAL) => {
    openModal: () => void;
    closeModal: () => void;
};
export declare const useModal: UseModal;
export {};
