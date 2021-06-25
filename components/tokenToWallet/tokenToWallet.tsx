import { useTokenToWallet } from 'hooks';
import { Tooltip } from '@lidofinance/lido-ui';
import { TokenToWalletStyle } from './tokenToWalletStyles';
import { TokenToWalletComponent } from './types';

const TokenToWallet: TokenToWalletComponent = (props) => {
  const { token, ...rest } = props;
  const { canAdd, handleAdd } = useTokenToWallet(token);

  if (!canAdd) return null;

  return (
    <Tooltip placement="bottomLeft" title="Add tokens to wallet">
      <TokenToWalletStyle tabIndex={-1} onClick={handleAdd} {...rest} />
    </Tooltip>
  );
};

export default TokenToWallet;
