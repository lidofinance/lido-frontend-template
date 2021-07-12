import {
  TransactionResponse,
  TransactionReceipt,
} from '@ethersproject/abstract-provider';
import { toastError, toastPending, toastSuccess } from 'components/toasts';
import { CHAINS } from '@lido-sdk/constants';
import { toast } from 'react-toastify';
import { runWithTransactionLogger } from 'utils';
import {
  TransactionToast,
  TransactionToastEtherscan,
} from './transactionToast';

export const transaction = async <T extends unknown = TransactionReceipt>(
  name: string,
  chainId: CHAINS,
  callback: () => Promise<TransactionResponse>,
): Promise<T | undefined> => {
  let pendingToastId = null;
  let result: T | undefined = undefined;

  try {
    pendingToastId = toastPending(
      <TransactionToast title="Awaiting signing">
        Confirm this transaction in your wallet
      </TransactionToast>,
    );

    const transaction = await runWithTransactionLogger(
      `${name} signing`,
      callback,
    );

    toast.dismiss(pendingToastId);

    pendingToastId = toastPending(
      <TransactionToastEtherscan
        title="Awaiting block confirmation"
        chainId={chainId}
        hash={transaction.hash}
      />,
    );

    result = (await runWithTransactionLogger(`${name} block confirmation`, () =>
      transaction.wait(),
    )) as T;

    toast.dismiss(pendingToastId);

    toastSuccess(
      <TransactionToastEtherscan
        title="Block confirmation received"
        chainId={chainId}
        hash={transaction.hash}
      />,
    );
  } catch (error) {
    if (pendingToastId) toast.dismiss(pendingToastId);
    toastError(error?.message || error);
  }

  return result;
};
