import { Tooltip } from '@lidofinance/lido-ui';
import { useTokenToWallet } from '@lido-sdk/react';
import { TokenToWalletStyle } from './tokenToWalletStyles';
import { TokenToWalletComponent } from './types';

const TokenToWallet: TokenToWalletComponent = (props) => {
  const { address, ...rest } = props;
  const { addToken } = useTokenToWallet(address);

  if (!addToken) return null;

  return (
    <Tooltip placement="bottomLeft" title="Add tokens to wallet">
      <TokenToWalletStyle tabIndex={-1} onClick={addToken} {...rest} />
    </Tooltip>
  );
};

export default TokenToWallet;
