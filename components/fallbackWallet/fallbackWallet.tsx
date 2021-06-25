import { FallbackWalletComponent } from './types';
import { FallbackWalletStyle } from './fallbackWalletStyles';
import { useWeb3React } from '@web3-react/core';
import { useErrorMessage } from './useErrorMessage';

const FallbackWallet: FallbackWalletComponent = (props) => {
  const { error } = useWeb3React();
  const message = useErrorMessage(error);

  if (error) {
    return <FallbackWalletStyle {...props}>{message}</FallbackWalletStyle>;
  }

  return null;
};

export default FallbackWallet;
