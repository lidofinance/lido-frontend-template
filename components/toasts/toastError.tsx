import { toast } from 'react-toastify';
import { TOASTS_ERROR_OPTIONS } from './config';
import { Toast } from './types';

export const toastError: Toast = (text, options) => {
  return toast.error(text, { ...TOASTS_ERROR_OPTIONS, ...options });
};

export const toastEthereumError = toastError.bind(
  null,
  'Something went wrong while retrieving data from Ethereum',
  { toastId: 'ethereum-network-error' },
);
