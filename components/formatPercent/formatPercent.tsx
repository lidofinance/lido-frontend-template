import { LOCALE } from 'config';
import { FormatPercentComponent } from './types';

const FormatPercent: FormatPercentComponent = (props) => {
  const { amount, ...rest } = props;
  const value =
    amount == null
      ? 'Unavailable'
      : amount.toLocaleString(LOCALE, {
          style: 'percent',
          maximumFractionDigits: 3,
        });

  return <span {...rest}>{value}</span>;
};

export default FormatPercent;
