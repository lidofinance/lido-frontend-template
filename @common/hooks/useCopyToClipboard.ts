import { ToastInfo } from '@lidofinance/lido-ui';
import { useCallback } from 'react';
import copy from 'copy-to-clipboard';

export const useCopyToClipboard = (text: string): (() => void) => {
  return useCallback(() => {
    copy(text);
    // TODO: without ToastInfo?
    ToastInfo('Copied to clipboard');
  }, [text]);
};
