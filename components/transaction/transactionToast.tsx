import { Link } from '@lidofinance/lido-ui';
import { getLinkToEtherscan } from 'config';
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
  const etherscanLink = getLinkToEtherscan(chainId, hash, 'tx');

  return (
    <TransactionToast {...rest}>
      {children && <div>{children}</div>}
      <Link href={etherscanLink}>View on Etherscan</Link>
    </TransactionToast>
  );
};
