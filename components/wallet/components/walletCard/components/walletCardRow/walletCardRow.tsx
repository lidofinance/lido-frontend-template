import { WalletCardRowStyle } from './styles';
import { WalletCardRowComponent } from './types';

const WalletCardRow: WalletCardRowComponent = (props) => {
  return <WalletCardRowStyle {...props} />;
};

export default WalletCardRow;
