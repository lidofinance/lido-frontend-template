import { toast } from 'react-toastify';
import {
  ToastPendingLoaderStyle,
  ToastPendingStyle,
  ToastPendingTextStyle,
} from './toastPendingStyles';
import { TOASTS_PENDING_OPTIONS } from './config';
import { Toast } from './types';

export const toastPending: Toast = (text, options) => {
  return toast(
    <ToastPendingStyle>
      <ToastPendingLoaderStyle />
      <ToastPendingTextStyle>{text}</ToastPendingTextStyle>
    </ToastPendingStyle>,
    { ...TOASTS_PENDING_OPTIONS, ...options },
  );
};
