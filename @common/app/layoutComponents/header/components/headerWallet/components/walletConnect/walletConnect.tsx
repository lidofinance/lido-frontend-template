import { FC } from 'react';
import { Button, ButtonProps } from '@lidofinance/lido-ui';
import { MODAL } from '@common/providers';
import { useModal } from '@common/hooks';

const WalletConnect: FC<ButtonProps> = (props) => {
  const { onClick, ...rest } = props;
  const { openModal } = useModal(MODAL.connect);

  return (
    <Button onClick={openModal} {...rest}>
      Connect wallet
    </Button>
  );
};

export default WalletConnect;
