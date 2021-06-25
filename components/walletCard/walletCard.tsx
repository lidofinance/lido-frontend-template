import {
  WalletCardStyle,
  WalletCardRowStyle,
  WalletCardBalanceStyle,
  WalletCardTitleStyle,
  WalletCardValueStyle,
  WalletCardExtraStyle,
  WalletCardAccountStyle,
  WalletCardContentStyle,
} from './walletCardStyles';
import AddressBadge from 'components/addressBadge';
import { Component } from 'types';
import { InlineLoader } from '@lidofinance/lido-ui';
import {
  WalletCardBalanceComponent,
  WalletCardComponent,
  WalletCardRowComponent,
} from './types';
import { useModal } from 'hooks';
import { MODAL } from 'providers';

export const WalletCard: WalletCardComponent = (props) => {
  return <WalletCardStyle color="accent" {...props} />;
};

export const WalletCardRow: WalletCardRowComponent = (props) => {
  return <WalletCardRowStyle {...props} />;
};

export const WalletCardBalance: WalletCardBalanceComponent = (props) => {
  const {
    title,
    small = false,
    extra,
    loading = false,
    children,
    value,
    ...rest
  } = props;

  const hasExtra = !!extra;
  const hasChildren = !!children;

  return (
    <WalletCardBalanceStyle {...rest}>
      <WalletCardTitleStyle>{title}</WalletCardTitleStyle>
      <WalletCardValueStyle $small={small}>
        {loading ? <InlineLoader /> : value}
      </WalletCardValueStyle>
      {hasExtra && (
        <WalletCardExtraStyle>
          {loading ? <InlineLoader /> : extra}
        </WalletCardExtraStyle>
      )}
      {hasChildren && (
        <WalletCardContentStyle $hidden={loading}>
          {children}
        </WalletCardContentStyle>
      )}
    </WalletCardBalanceStyle>
  );
};

export const WalletCardAccount: Component<'div', { account?: string | null }> =
  (props) => {
    const { account, ...rest } = props;
    const { openModal } = useModal(MODAL.wallet);

    return (
      <WalletCardAccountStyle {...rest}>
        <AddressBadge address={account} onClick={openModal} color="accent" />
      </WalletCardAccountStyle>
    );
  };
