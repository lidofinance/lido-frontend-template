import { Link } from '@lidofinance/lido-ui';
import { getEtherscanTxLink } from '@lido-sdk/helpers';
import {
  TransactionDescriptionStyle,
  TransactionTitleStyle,
} from './transactionStyles';
import {
  TransactionToastComponent,
  TransactionToastEtherscanComponent,
} from './types';

export const TransactionToast: TransactionToastComponent = (props) => {
  const { title, children } = props;

  return (
    <>
      <TransactionTitleStyle>{title}</TransactionTitleStyle>
      <TransactionDescriptionStyle>{children}</TransactionDescriptionStyle>
    </>
  );
};

export const TransactionToastEtherscan: TransactionToastEtherscanComponent = (
  props,
) => {
  const { chainId, hash, children, ...rest } = props;
  const etherscanLink = getEtherscanTxLink(chainId, hash);

  return (
    <TransactionToast {...rest}>
      {children && <div>{children}</div>}
      <Link href={etherscanLink}>View on Etherscan</Link>
    </TransactionToast>
  );
};
