import { useBreakpoint } from '@lidofinance/lido-ui';
import { AddressBadgeStyle } from './addressBadgeStyles';
import { AddressBadgeComponent } from './types';

// TODO: move to UI
const AddressBadge: AddressBadgeComponent = (props) => {
  const { address, ...rest } = props;
  const isMobile = useBreakpoint('md');

  const mobileSymbols = 3;
  const desktopSymbols = 6;
  const symbols = isMobile ? mobileSymbols : desktopSymbols;

  return (
    <AddressBadgeStyle symbols={symbols} address={address ?? ''} {...rest} />
  );
};

export default AddressBadge;
