import { useCallback } from 'react';
import copy from 'copy-to-clipboard';
import { toastInfo } from 'components/toasts';

export const useCopyToClipboard = (text: string): (() => void) => {
  return useCallback(() => {
    copy(text);
    toastInfo('Copied to clipboard');
  }, [text]);
};
