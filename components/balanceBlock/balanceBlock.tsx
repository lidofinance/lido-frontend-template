import {
  BalanceBlockStyle,
  BalanceBlockContentStyle,
  BalanceBlockIconStyle,
  BalanceBlockTitleStyle,
  BalanceBlockValueStyle,
} from './balanceBlockStyles';
import { BalanceBlockComponent } from './types';

const BalanceBlock: BalanceBlockComponent = (props) => {
  const { title, icon, children, ...rest } = props;
  const hasIcon = !!icon;

  return (
    <BalanceBlockStyle {...rest}>
      <BalanceBlockContentStyle>
        <BalanceBlockTitleStyle>{title}</BalanceBlockTitleStyle>
        <BalanceBlockValueStyle>{children}</BalanceBlockValueStyle>
      </BalanceBlockContentStyle>
      {hasIcon && <BalanceBlockIconStyle>{icon}</BalanceBlockIconStyle>}
    </BalanceBlockStyle>
  );
};

export default BalanceBlock;
