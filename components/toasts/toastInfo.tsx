import { toast } from 'react-toastify';
import { TOASTS_INFO_OPTIONS } from './config';
import { Toast } from './types';

export const toastInfo: Toast = (text, options) => {
  return toast(text, { ...TOASTS_INFO_OPTIONS, ...options });
};
