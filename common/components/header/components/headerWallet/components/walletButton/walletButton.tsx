import { FC } from 'react';
import { ButtonProps } from '@lidofinance/lido-ui';
import { useEthereumBalance, useSDK } from '@lido-sdk/react';

import AddressBadge from 'common/components/addressBadge';
import FormatToken from 'common/components/formatToken';
import { MODAL } from 'common/providers';

import { useModal } from 'hooks';

import {
  WalledButtonStyle,
  WalledButtonWrapperStyle,
  WalledButtonBalanceStyle,
  WalledButtonLoaderStyle,
} from './styles';

const WalletButton: FC<ButtonProps> = (props) => {
  const { onClick, ...rest } = props;
  const { openModal } = useModal(MODAL.wallet);
  const { account } = useSDK();
  const { data: balance, initialLoading } = useEthereumBalance();

  return (
    <WalledButtonStyle
      size="sm"
      variant="text"
      color="secondary"
      onClick={openModal}
      {...rest}
    >
      <WalledButtonWrapperStyle>
        <WalledButtonBalanceStyle>
          {initialLoading ? (
            <WalledButtonLoaderStyle />
          ) : (
            <FormatToken amount={balance} symbol="ETH" />
          )}
        </WalledButtonBalanceStyle>
        <AddressBadge address={account} />
      </WalledButtonWrapperStyle>
    </WalledButtonStyle>
  );
};

export default WalletButton;
