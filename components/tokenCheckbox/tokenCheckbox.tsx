import { FC } from 'react';
import {
  TokenCheckboxWrapperStyle,
  TokenCheckboxContainerStyle,
  TokenCheckboxBadgeStyle,
  TokenCheckboxValueStyle,
} from './tokenCheckboxStyles';
import { Checkbox } from '@lidofinance/lido-ui';
import { BigNumber } from 'ethers';
import { formatBalance } from 'utils';

interface Token {
  tokenIndex: string;
  amount: BigNumber;
  available: boolean;
  isChecked: boolean;
  handleChange: (value: string) => void;
}

const TokenCheckbox: FC<Token> = ({
  tokenIndex,
  amount,
  available,
  isChecked,
  handleChange,
}) => {
  const badgeText = available ? 'Ready to claim' : 'Pending';
  const formatedAmount = formatBalance(amount);
  return (
    <TokenCheckboxContainerStyle onClick={() => handleChange(tokenIndex)}>
      <TokenCheckboxWrapperStyle>
        <Checkbox
          checked={isChecked}
          onChange={() => handleChange(tokenIndex)}
        />
        <TokenCheckboxValueStyle>{formatedAmount}</TokenCheckboxValueStyle>
      </TokenCheckboxWrapperStyle>
      <TokenCheckboxBadgeStyle $available={available}>
        {badgeText}
      </TokenCheckboxBadgeStyle>
    </TokenCheckboxContainerStyle>
  );
};

export default TokenCheckbox;
