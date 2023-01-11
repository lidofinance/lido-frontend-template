import AddressBadge from 'common/components/addressBadge';
import { Component } from 'types';
import { useModal } from 'hooks';
import { MODAL } from 'providers';

import { WalletCardAccountStyle } from './styles';

const WalletCardAccount: Component<'div', { account?: string | null }> = (
  props,
) => {
  const { account, ...rest } = props;
  const { openModal } = useModal(MODAL.wallet);

  return (
    <WalletCardAccountStyle {...rest}>
      <AddressBadge address={account} onClick={openModal} color="accent" />
    </WalletCardAccountStyle>
  );
};

export default WalletCardAccount;
