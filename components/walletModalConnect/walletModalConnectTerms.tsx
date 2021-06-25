import { FC } from 'react';
import { Checkbox, CheckboxProps, Link } from '@lidofinance/lido-ui';
import { TermsStyle, TermsTextStyle } from './walletModalConnectTermsStyles';

type WalletModalConnectTermsProps = Pick<
  CheckboxProps,
  'checked' | 'onChange' | 'children'
>;

const WalletModalConnectTerms: FC<WalletModalConnectTermsProps> = (props) => (
  <TermsStyle>
    <Checkbox {...props} />
    <TermsTextStyle>
      I have read and accept{' '}
      <Link href="https://lido.fi/terms-of-use">Terms of Service</Link> and{' '}
      <Link href="https://lido.fi/privacy-notice">Privacy Notice</Link>.
    </TermsTextStyle>
  </TermsStyle>
);

export default WalletModalConnectTerms;
