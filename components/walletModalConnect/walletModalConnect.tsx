import { FC, useCallback } from 'react';
import { Modal, ModalProps } from '@lidofinance/lido-ui';
import Terms from './walletModalConnectTerms';
import {
  ConnectMetamask,
  ConnectWalletConnect,
  ConnectCoinbase,
  ConnectTrust,
  ConnectImToken,
  ConnectLedger,
  ConnectCoin98,
} from 'components/connectors';
import { useLocalStorage } from '@lido-sdk/react';
import { helpers } from '@lido-sdk/web3-react';
import { STORAGE_TERMS_KEY } from 'config';

const WalletModalConnect: FC<ModalProps> = (props) => {
  const { onClose } = props;

  const [checked, setChecked] = useLocalStorage(STORAGE_TERMS_KEY, false);

  const handleChange = useCallback(() => {
    setChecked((currentValue) => !currentValue);
  }, [setChecked]);

  const common = {
    disabled: !checked,
    termsChecked: checked,
    onConnect: onClose,
  };

  const wallets = [
    <ConnectMetamask key="Metamask" {...common} />,
    <ConnectWalletConnect key="WalletConnect" {...common} />,
    <ConnectLedger key="Ledger" {...common} />,
    <ConnectCoinbase key="Coinbase" {...common} />,
    <ConnectTrust key="Trust" {...common} />,
    <ConnectImToken key="ImToken" {...common} />,
  ];

  const ConnectCoin98WithProps = <ConnectCoin98 key="Coin98" {...common} />;
  if (helpers.isCoin98Provider()) {
    wallets.unshift(ConnectCoin98WithProps);
  } else {
    wallets.push(ConnectCoin98WithProps);
  }

  return (
    <Modal title="Connect wallet" {...props}>
      <Terms onChange={handleChange} checked={checked} />
      {wallets}
    </Modal>
  );
};

export default WalletModalConnect;
