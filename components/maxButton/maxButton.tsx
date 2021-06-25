import { Button, ButtonProps } from '@lidofinance/button';
import { FC } from 'react';

const MaxButton: FC<ButtonProps> = (props) => (
  <Button size="xs" variant="translucent" {...props}>
    MAX
  </Button>
);

export default MaxButton;
