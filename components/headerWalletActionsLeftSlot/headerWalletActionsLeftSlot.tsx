import React, { FC } from 'react';
import { CHAINS, getChainColor } from '@lido-sdk/constants';
import { useWeb3 } from '@reef-knot/web3-react';

import { HeaderWalletChainStyle } from './styles';

export const HeaderWalletActionsLeftSlot: FC = () => {
  const { active, chainId } = useWeb3();

  const chainName = chainId ? CHAINS[chainId] : CHAINS.Mainnet;
  const testNet = chainId !== CHAINS.Mainnet;
  const showNet = testNet && active;

  return (
    <>
      {showNet && (
        <HeaderWalletChainStyle
          $color={getChainColor(chainId || CHAINS.Mainnet)}
        >
          {chainName}
        </HeaderWalletChainStyle>
      )}
    </>
  );
};
