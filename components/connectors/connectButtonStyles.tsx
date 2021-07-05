import { Button } from '@lidofinance/lido-ui';
import styled from 'styled-components';

export const ConnectButtonStyle = styled(Button).attrs({
  fullwidth: true,
  variant: 'ghost',
})`
  text-align: left;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizesMap.xxs}px;
  padding-left: ${({ theme }) => theme.spaceMap.lg}px;
  padding-right: ${({ theme }) => theme.spaceMap.lg}px;
  margin-bottom: ${({ theme }) => theme.spaceMap.sm}px;
  background: ${({ theme }) => theme.colors.background};
`;

export const ConnectButtonContentStyle = styled.span`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
`;

export const ConnectButtonIconStyle = styled.span`
  display: flex;
  margin: -20px 0 -20px auto;
`;
