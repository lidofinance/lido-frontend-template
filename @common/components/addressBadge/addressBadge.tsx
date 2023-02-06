import { useBreakpoint } from '@lidofinance/lido-ui';
import { AddressBadgeStyle } from './addressBadgeStyles';
import { AddressBadgeComponent } from './types';

// TODO: move to https://ui.lido.fi/?path=/story/images-identicon--badge ?
const AddressBadge: AddressBadgeComponent = (props) => {
  const { address, ...rest } = props;
  const isMobile = useBreakpoint('md');

  return (
    <AddressBadgeStyle
      symbols={isMobile ? 3 : 6}
      address={address ?? ''}
      {...rest}
    />
  );
};

export default AddressBadge;
