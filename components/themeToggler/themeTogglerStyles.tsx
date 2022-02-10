import { Button } from '@lidofinance/lido-ui';
import styled from 'styled-components';

export const ThemeTogglerStyle = styled(Button).attrs({
  color: 'secondary',
})`
  position: fixed;
  top: 18px;
  right: 18px;
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadiusesMap.sm}px;
  padding: ${({ theme }) => theme.spaceMap.xs}px;
  font-size: 0;
  line-height: 0;
  min-width: 0px;
  z-index: 10;
  width: 44px;
  height: 44px;
`;
