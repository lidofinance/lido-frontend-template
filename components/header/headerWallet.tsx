import { FC } from 'react';
import { useWeb3React } from '@web3-react/core';
import WalletButton from 'components/walletButton';
import WalletConnect from 'components/walletConnect';
import { HeaderWalletChainStyle } from './headerWalletStyles';
import { getChainColor, CHAINS } from 'config';
import { useChain } from 'hooks';

const HeaderWallet: FC = () => {
  const { active } = useWeb3React();
  const chainId = useChain();

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
    </>
  );
};

export default HeaderWallet;
