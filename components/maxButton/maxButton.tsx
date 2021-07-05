import { Button, ButtonProps } from '@lidofinance/button';
import { FC } from 'react';

const MaxButton: FC<ButtonProps> = (props) => (
  <Button size="xxs" variant="translucent" {...props}>
    MAX
  </Button>
);

export default MaxButton;
