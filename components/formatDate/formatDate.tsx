import { LOCALE } from 'config';
import { memo } from 'react';
import { FormatDateComponent } from './types';

const FormatDate: FormatDateComponent = (props) => {
  const { timeStamp, ...rest } = props;

  const date = new Date(timeStamp);
  const value = date.toLocaleString(LOCALE, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <time dateTime={date.toISOString()} {...rest}>
      {value}
    </time>
  );
};

export default memo(FormatDate);
