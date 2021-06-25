import { FC } from 'react';
import { MainStyle } from './mainStyles';

const Main: FC = (props) => {
  return <MainStyle size="tight" forwardedAs="main" {...props} />;
};

export default Main;
