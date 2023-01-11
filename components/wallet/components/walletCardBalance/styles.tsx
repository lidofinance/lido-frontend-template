import styled from 'styled-components';

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
