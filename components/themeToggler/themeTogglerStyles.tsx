import { Button } from '@lidofinance/lido-ui';
import styled from 'styled-components';

export const ThemeTogglerStyle = styled(Button).attrs({
  color: 'secondary',
})`
  position: fixed;
  bottom: 0;
  right: 0;
  border: 0;
  border-radius: 0;
  border-top-left-radius: ${({ theme }) => theme.borderRadiusesMap.sm}px;
  padding: ${({ theme }) => theme.spaceMap.xs}px;
  font-size: 0;
  line-height: 0;
  min-width: 0px;
  z-index: 10;
`;
