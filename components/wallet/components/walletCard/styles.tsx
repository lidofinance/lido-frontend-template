import styled from 'styled-components';
import { Block } from '@lidofinance/lido-ui';

export const WalletCardStyle = styled(Block)`
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  margin-bottom: ${({ theme }) => -theme.borderRadiusesMap.xl}px;
  padding-bottom: ${({ theme }) =>
    theme.borderRadiusesMap.xl + theme.spaceMap.xxl}px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-bottom: ${({ theme }) =>
      theme.borderRadiusesMap.xl + theme.spaceMap.lg}px;
  }
`;
