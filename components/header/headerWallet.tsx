import { FC } from 'react';
import { useWeb3 } from '@lido-sdk/web3-react';
import { useSDK } from '@lido-sdk/react';
import WalletButton from 'components/walletButton';
import WalletConnect from 'components/walletConnect';
import ThemeToggler from 'components/themeToggler';
import { HeaderWalletChainStyle } from './headerWalletStyles';
import { CHAINS, getChainColor } from '@lido-sdk/constants';

const HeaderWallet: FC = () => {
  const { active } = useWeb3();
  const { chainId } = useSDK();

  const chainName = CHAINS[chainId];
  const testNet = chainId !== CHAINS.Mainnet;
  const showNet = testNet && active;

  return (
    <>
      {showNet && (
        <HeaderWalletChainStyle $color={getChainColor(chainId)}>
          {chainName}
        </HeaderWalletChainStyle>
      )}
      {active ? <WalletButton /> : <WalletConnect size="sm" />}
      <ThemeToggler />
    </>
  );
};

export default HeaderWallet;
