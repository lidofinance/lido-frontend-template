import {
  ClaimCardComponent,
  ClaimStatComponent,
  ClaimStatBalanceComponent,
  ClaimCardEditComponent,
} from './types';
import {
  ClaimCardStyle,
  ClaimStatStyle,
  ClaimStatBalanceStyle,
  ClaimCardTitleStyle,
  ClaimStatValueStyle,
  ClaimCardExtraStyle,
  ClaimCardContentStyle,
  ClaimCardEditStyle,
} from './claimStyles';
import { InlineLoader } from '@lidofinance/lido-ui';

export const ClaimCard: ClaimCardComponent = (props) => {
  return <ClaimCardStyle {...props} />;
};

export const ClaimStat: ClaimStatComponent = (props) => {
  return <ClaimStatStyle {...props} />;
};

export const ClaimStatBalance: ClaimStatBalanceComponent = (props) => {
  const {
    title,
    small = false,
    extra,
    loading = false,
    children,
    value,
    bold = false,
    ...rest
  } = props;

  const hasExtra = !!extra;
  const hasChildren = !!children;

  return (
    <ClaimStatBalanceStyle {...rest}>
      <ClaimCardTitleStyle>{title}</ClaimCardTitleStyle>
      <ClaimStatValueStyle $small={small} $bold={bold}>
        {loading ? <InlineLoader /> : value}
      </ClaimStatValueStyle>
      {hasExtra && (
        <ClaimCardExtraStyle>
          {loading ? <InlineLoader /> : extra}
        </ClaimCardExtraStyle>
      )}
      {hasChildren && (
        <ClaimCardContentStyle $hidden={loading}>
          {children}
        </ClaimCardContentStyle>
      )}
    </ClaimStatBalanceStyle>
  );
};

export const ClaimCardEdit: ClaimCardEditComponent = (props) => {
  return <ClaimCardEditStyle {...props} />;
};
