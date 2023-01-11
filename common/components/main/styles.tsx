import styled from 'styled-components';
import { Container } from '@lidofinance/lido-ui';

export const MainStyle = styled(Container)`
  position: relative;
  margin-top: ${({ theme }) => theme.spaceMap.sm}px;
  margin-bottom: ${({ theme }) => theme.spaceMap.sm}px;
`;
