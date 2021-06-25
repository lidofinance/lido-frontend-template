import styled from 'styled-components';

export const BalanceBlockStyle = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadiusesMap.lg}px;
  padding: ${({ theme }) => theme.spaceMap.xl}px
    ${({ theme }) => theme.spaceMap.xxl}px;
  margin: ${({ theme }) => theme.spaceMap.xl}px 0;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const BalanceBlockIconStyle = styled.div`
  margin-left: auto;
  line-height: 0;
`;

export const BalanceBlockContentStyle = styled.div`
  margin-right: ${({ theme }) => theme.spaceMap.xxl}px;
`;

export const BalanceBlockTitleStyle = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizesMap.xs}px;
  line-height: 1.4em;
`;

export const BalanceBlockValueStyle = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizesMap.lg}px;
  line-height: 1.3em;
  font-weight: 600;
  margin-top: 2px;
`;
