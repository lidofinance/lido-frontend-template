import styled from 'styled-components';
import { Block } from '@lidofinance/lido-ui';

export const WalletCardStyle = styled(Block)`
  margin-bottom: ${({ theme }) => -theme.borderRadiusesMap.xl}px;

  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  padding-bottom: ${({ theme }) =>
    theme.borderRadiusesMap.xl + theme.spaceMap.xxl}px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-bottom: ${({ theme }) =>
      theme.borderRadiusesMap.xl + theme.spaceMap.lg}px;
  }
  background: linear-gradient(52.01deg, #28144a 0%, #512a96 100%);
`;

export const WalletCardRowStyle = styled.div`
  display: flex;
  margin: ${({ theme }) => theme.spaceMap.lg}px 0;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const WalletCardBalanceStyle = styled.div`
  margin-right: 18px;
  flex-basis: 50%;
  flex-grow: 1;
  font-size: ${({ theme }) => theme.fontSizesMap.xxs}px;
  line-height: 1.6em;

  :last-child {
    margin-right: 0;
  }
`;

export const WalletCardTitleStyle = styled.div``;

export const WalletCardValueStyle = styled.div<{ $small: boolean }>`
  margin-top: 2px;
  font-size: ${({ theme, $small }) =>
    $small ? theme.fontSizesMap.sm : theme.fontSizesMap.md}px;
  line-height: 1.4em;
  font-weight: 800;
  white-space: nowrap;
`;

export const WalletCardExtraStyle = styled.div`
  margin-top: 2px;
  opacity: 0.5;
`;

export const WalletCardContentStyle = styled.div<{ $hidden: boolean }>`
  margin-top: 8px;
  opacity: ${({ $hidden }) => ($hidden ? 0 : 1)};
  pointer-events: ${({ $hidden }) => ($hidden ? 'none' : 'auto')};
`;

export const WalletCardAccountStyle = styled.div`
  align-self: stretch;
  display: flex;
  flex-basis: 50%;
  flex-grow: 1;
  flex-shrink: 1;
  overflow: hidden;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;

  & > * {
    cursor: pointer;
  }
`;
