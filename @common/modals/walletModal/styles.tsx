import { Button } from '@lidofinance/lido-ui';
import styled from 'styled-components';

export const WalletModalContentStyle = styled.div`
  padding: ${({ theme }) => theme.spaceMap.lg}px;
  background-color: var(--lido-color-background);
  border-radius: ${({ theme }) => theme.borderRadiusesMap.lg}px;
`;

export const WalletModalConnectedStyle = styled.div`
  display: flex;
  align-items: center;
`;

export const WalletModalConnectorStyle = styled.div`
  flex-grow: 1;
  margin: ${({ theme }) => theme.spaceMap.sm}px 0;
  margin-right: auto;
  padding-right: ${({ theme }) => theme.spaceMap.md}px;

  font-size: ${({ theme }) => theme.fontSizesMap.xxs}px;
  line-height: 1.4em;
  color: var(--lido-color-textSecondary);
`;

export const WalletModalDisconnectStyle = styled(Button)`
  flex-shrink: 0;
`;

export const WalletModalAccountStyle = styled.div`
  display: flex;
  align-items: center;
  margin: ${({ theme }) => theme.spaceMap.sm}px 0;
`;

export const WalletModalAddressStyle = styled.div`
  margin-left: ${({ theme }) => theme.spaceMap.sm}px;

  font-size: ${({ theme }) => theme.fontSizesMap.sm}px;
  font-weight: 800;
  line-height: 1.2em;
`;

export const WalletModalActionsStyle = styled.div`
  margin: 0 ${({ theme }) => -theme.spaceMap.sm}px;
  margin-top: ${({ theme }) => theme.spaceMap.md}px;

  button {
    margin-right: ${({ theme }) => theme.spaceMap.sm}px;
    padding-left: ${({ theme }) => theme.spaceMap.sm}px;
    padding-right: ${({ theme }) => theme.spaceMap.sm}px;
  }
`;
