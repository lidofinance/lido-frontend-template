import { Button } from '@lidofinance/lido-ui';
import styled from 'styled-components';

export const ThemeTogglerStyle = styled(Button).attrs({
  variant: 'text',
  size: 'xs',
})`
  border-radius: 10px;
  min-width: 0;
  margin-left: ${({ theme }) => theme.spaceMap.sm}px;
  padding-left: 10px;
  padding-right: 10px;
  line-height: 0;
  font-size: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
`;
