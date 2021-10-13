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

  &:disabled {
    opacity: 1;
  }
`;

export const ConnectButtonContentStyle = styled.span`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
`;

export const ConnectButtonTitleStyle = styled.div`
  color: ${({ theme }) => theme.colors.text};
  padding: 8px 0;

  button:disabled & {
    opacity: 0.5;
  }
`;

export const ConnectButtonIconStyle = styled.span`
  display: flex;
  margin: -20px 0 -20px auto;

  button:disabled & {
    opacity: 0.5;
  }
`;

export const ConnectButtonTooltipTriggerStyle = styled.div`
  margin-left: 8px;
  margin-top: 2px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.text};
  border-bottom: 1px dashed ${({ theme }) => theme.colors.textSecondary};
  pointer-events: auto;
`;
