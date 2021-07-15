import { FC, useCallback } from 'react';
import { Modal, ModalProps } from '@lidofinance/lido-ui';
import Terms from './walletModalConnectTerms';
import {
  ConnectMetamask,
  ConnectWalletConnect,
  ConnectCoinbase,
  ConnectTrust,
  ConnectImToken,
} from 'components/connectors';
import { useLocalStorage } from '@lido-sdk/react';
import { STORAGE_TERMS_KEY } from 'config';

const WalletModalConnect: FC<ModalProps> = (props) => {
  const { onClose } = props;

  const [checked, setChecked] = useLocalStorage(STORAGE_TERMS_KEY, false);

  const handleChange = useCallback(() => {
    setChecked((currentValue) => !currentValue);
  }, [setChecked]);

  const common = {
    disabled: !checked,
    onConnect: onClose,
  };

  return (
    <Modal title="Connect wallet" {...props}>
      <Terms onChange={handleChange} checked={checked} />
      <ConnectMetamask {...common} />
      <ConnectWalletConnect {...common} />
      <ConnectCoinbase {...common} />
      <ConnectTrust {...common} />
      <ConnectImToken {...common} />
    </Modal>
  );
};

export default WalletModalConnect;
