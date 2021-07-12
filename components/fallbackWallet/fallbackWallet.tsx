import { FallbackWalletComponent } from './types';
import { FallbackWalletStyle } from './fallbackWalletStyles';
import { useErrorMessage } from './useErrorMessage';

const FallbackWallet: FallbackWalletComponent = (props) => {
  const error = useErrorMessage();

  if (error) {
    return <FallbackWalletStyle {...props}>{error}</FallbackWalletStyle>;
  }

  return null;
};

export default FallbackWallet;
