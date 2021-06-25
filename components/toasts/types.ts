import { ToastOptions } from 'react-toastify';

export type Toast = (
  text: React.ReactNode,
  options?: ToastOptions,
) => React.ReactText;
