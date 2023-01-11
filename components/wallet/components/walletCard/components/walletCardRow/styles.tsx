import styled from 'styled-components';

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
