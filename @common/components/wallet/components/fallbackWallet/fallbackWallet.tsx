import { useErrorMessage } from './useErrorMessage';
import { FallbackWalletComponent } from './types';
import { FallbackWalletStyle } from './styles';

const FallbackWallet: FallbackWalletComponent = (props) => {
  const error = useErrorMessage();

  if (error) {
    return <FallbackWalletStyle {...props}>{error}</FallbackWalletStyle>;
  }

  return null;
};

export default FallbackWallet;
