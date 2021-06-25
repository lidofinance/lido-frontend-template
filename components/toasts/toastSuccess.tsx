import { toast } from 'react-toastify';
import { TOASTS_SUCCESS_OPTIONS } from './config';
import { Toast } from './types';

export const toastSuccess: Toast = (text, options) => {
  return toast.success(text, { ...TOASTS_SUCCESS_OPTIONS, ...options });
};
