import { ServicePageStyle } from './servicePageStyles';
import Main from 'components/main';
import { H1, Text } from '@lidofinance/lido-ui';
import { ServicePageComponent } from './types';

const ServicePage: ServicePageComponent = (props) => {
  const { title, children, ...rest } = props;
  return (
    <ServicePageStyle {...rest}>
      <Main>
        <H1>{title}</H1>
        <Text color="secondary">{children}</Text>
      </Main>
    </ServicePageStyle>
  );
};

export default ServicePage;
