import { FC } from 'react';
import { ButtonProps } from '@lidofinance/lido-ui';
import AddressBadge from 'components/addressBadge';
import {
  WalledButtonStyle,
  WalledButtonWrapperStyle,
  WalledButtonBalanceStyle,
  WalledButtonLoaderStyle,
} from './walletButtonStyles';
import { useModal, useMaticTokenRPC } from 'hooks';
import { useContractSWR, useSDK } from '@lido-sdk/react';
import FormatToken from 'components/formatToken';
import { MODAL } from 'providers';

const WalletButton: FC<ButtonProps> = (props) => {
  const { onClick, ...rest } = props;
  const { openModal } = useModal(MODAL.wallet);
  const { account } = useSDK();
  const maticTokenRPC = useMaticTokenRPC();
  // const { data: balance, initialLoading } = useEthereumBalance();
  const maticBalance = useContractSWR({
    contract: maticTokenRPC,
    method: 'balanceOf',
    params: [account],
  });
  const maticSymbol = useContractSWR({
    contract: maticTokenRPC,
    method: 'symbol',
    params: [],
  });

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
          {maticBalance.initialLoading ? (
            <WalledButtonLoaderStyle />
          ) : (
            <FormatToken
              amount={maticBalance.data}
              symbol={maticSymbol.data as string}
            />
          )}
        </WalledButtonBalanceStyle>
        <AddressBadge address={account} />
      </WalledButtonWrapperStyle>
    </WalledButtonStyle>
  );
};

export default WalletButton;
