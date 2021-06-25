import styled from 'styled-components';
import { Button, InlineLoader } from '@lidofinance/lido-ui';

export const WalledButtonStyle = styled(Button)`
  flex-shrink: 1;
  min-width: unset;
  overflow: hidden;
`;

export const WalledButtonWrapperStyle = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: -8px -16px;
`;

export const WalledButtonBalanceStyle = styled.span`
  margin-right: 16px;
  margin-left: 4px;

  ${({ theme }) => theme.mediaQueries.md} {
    display: none;
  }
`;

export const WalledButtonLoaderStyle = styled(InlineLoader)`
  width: 60px;
`;
