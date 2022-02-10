import { FC } from 'react';
import { useWeb3 } from '@lido-sdk/web3-react';
import WalletButton from 'components/walletButton';
import WalletConnect from 'components/walletConnect';

const HeaderWallet: FC = () => {
  const { active } = useWeb3();
  return <>{active ? <WalletButton /> : <WalletConnect size="sm" />}</>;
};

export default HeaderWallet;
