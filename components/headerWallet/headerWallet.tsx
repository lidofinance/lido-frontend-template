import React, { FC } from 'react';
// TODO: remove relations with `@lido-sdk/*`
// import { CHAINS, getChainColor } from '@lido-sdk/constants'
import { useWeb3 } from '@reef-knot/web3-react';
import { ThemeToggler } from '@lidofinance/lido-ui';

// import { WalletButton } from './components/walletButton'
// import { WalletConnect } from './components/walletConnect'

// import { HeaderWalletChainStyle } from './styles'
import { IHeaderWallet } from './types';

export const HeaderWallet: FC<IHeaderWallet> = (props) => {
  const { leftSlot, connectedWalletInfoButton, walletConnectButton } = props;
  // const { active, chainId } = useWeb3()
  const { active } = useWeb3();

  // const chainName = chainId ? CHAINS[chainId] : CHAINS.Mainnet
  // const testNet = chainId !== CHAINS.Mainnet
  // const showNet = testNet && active

  return (
    <>
      {leftSlot}
      {/*{showNet && <HeaderWalletChainStyle $color={getChainColor(chainId || CHAINS.Mainnet)}>{chainName}</HeaderWalletChainStyle>}*/}
      {active ? connectedWalletInfoButton : walletConnectButton}
      <ThemeToggler />
    </>
  );
};
