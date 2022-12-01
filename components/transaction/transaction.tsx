import {
  TransactionResponse,
  TransactionReceipt,
} from '@ethersproject/abstract-provider';
import {
  toast,
  ToastError,
  ToastPending,
  ToastSuccess,
} from '@lidofinance/lido-ui';
import { CHAINS } from '@lido-sdk/constants';
import { runWithTransactionLogger } from 'utils';
import {
  TransactionToast,
  TransactionToastEtherscan,
} from './transactionToast';

export const transaction = async <T extends TransactionReceipt>(
  name: string,
  chainId: CHAINS,
  callback: () => Promise<TransactionResponse>,
): Promise<T | undefined> => {
  let pendingToastId = null;
  let result: T | undefined = undefined;

  try {
    pendingToastId = ToastPending(
      <TransactionToast title="Awaiting signing">
        Confirm this transaction in your wallet
      </TransactionToast>,
    );

    const transaction = await runWithTransactionLogger(
      `${name} signing`,
      callback,
    );

    toast.dismiss(pendingToastId);

    pendingToastId = ToastPending(
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

    ToastSuccess(
      <TransactionToastEtherscan
        title="Block confirmation received"
        chainId={chainId}
        hash={transaction.hash}
      />,
    );
  } catch (error) {
    if (pendingToastId) toast.dismiss(pendingToastId);

    if (error instanceof Error) {
      ToastError(error?.message);
    } else if (error instanceof String) {
      ToastError(error);
    } else {
      ToastError('Transaction error');
    }
  }

  return result;
};
