import { WalletCardStyle } from './styles';
import { WalletCardComponent } from './types';

const WalletCard: WalletCardComponent = (props) => {
  return <WalletCardStyle color="accent" {...props} />;
};

export default WalletCard;
