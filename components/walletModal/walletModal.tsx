import {
  ButtonIcon,
  Modal,
  ModalProps,
  Identicon,
  External,
  Copy,
  trimAddress,
} from '@lidofinance/lido-ui';
import { useWeb3React } from '@web3-react/core';
import {
  useConnectorStorage,
  useCopyToClipboard,
  useDisconnect,
  useEtherscanOpen,
} from 'hooks';
import { FC, useCallback, useMemo } from 'react';
import {
  WalletModalContentStyle,
  WalletModalConnectedStyle,
  WalletModalConnectorStyle,
  WalletModalDisconnectStyle,
  WalletModalAccountStyle,
  WalletModalAddressStyle,
  WalletModalActionsStyle,
} from './walletModalStyles';

const WalletModal: FC<ModalProps> = (props) => {
  const { onClose } = props;
  const { account } = useWeb3React();
  const [connector] = useConnectorStorage();
  const disconnect = useDisconnect();

  const handleDisconnect = useCallback(() => {
    disconnect();
    onClose?.();
  }, [disconnect, onClose]);

  const trimmedAddress = useMemo(
    () => trimAddress(account ?? '', 6),
    [account],
  );

  const handleCopy = useCopyToClipboard(account ?? '');
  const handleEtherscan = useEtherscanOpen(account ?? '', 'address');

  return (
    <Modal title="Account" {...props}>
      <WalletModalContentStyle>
        <WalletModalConnectedStyle>
          <WalletModalConnectorStyle>
            Connected with {connector}
          </WalletModalConnectorStyle>

          <WalletModalDisconnectStyle
            size="xs"
            variant="outlined"
            onClick={handleDisconnect}
          >
            Disconnect
          </WalletModalDisconnectStyle>
        </WalletModalConnectedStyle>

        <WalletModalAccountStyle>
          <Identicon address={account ?? ''} />
          <WalletModalAddressStyle>{trimmedAddress}</WalletModalAddressStyle>
        </WalletModalAccountStyle>

        <WalletModalActionsStyle>
          <ButtonIcon
            onClick={handleCopy}
            icon={<Copy />}
            size="xs"
            variant="ghost"
          >
            Copy address
          </ButtonIcon>
          <ButtonIcon
            onClick={handleEtherscan}
            icon={<External />}
            size="xs"
            variant="ghost"
          >
            View on Etherscan
          </ButtonIcon>
        </WalletModalActionsStyle>
      </WalletModalContentStyle>
    </Modal>
  );
};

export default WalletModal;
