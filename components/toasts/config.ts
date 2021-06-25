import { toast, ToastOptions } from 'react-toastify';

export const TOASTS_DEFAULT_OPTIONS: ToastOptions = {
  position: toast.POSITION.BOTTOM_LEFT,
  closeButton: false,
  hideProgressBar: false,
  pauseOnHover: true,
  pauseOnFocusLoss: true,
  closeOnClick: false,
  autoClose: 6000,
  delay: 0,
};

export const TOASTS_ERROR_OPTIONS: ToastOptions = {
  ...TOASTS_DEFAULT_OPTIONS,
  closeOnClick: true,
};

export const TOASTS_SUCCESS_OPTIONS: ToastOptions = {
  ...TOASTS_DEFAULT_OPTIONS,
};

export const TOASTS_INFO_OPTIONS: ToastOptions = {
  ...TOASTS_DEFAULT_OPTIONS,
  closeOnClick: true,
};

export const TOASTS_PENDING_OPTIONS: ToastOptions = {
  ...TOASTS_DEFAULT_OPTIONS,
  autoClose: false,
};
