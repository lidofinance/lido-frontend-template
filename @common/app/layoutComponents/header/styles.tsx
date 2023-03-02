import styled from 'styled-components';
import { Container } from '@lidofinance/lido-ui';

export const HeaderStyle = styled(Container)`
  display: flex;
  align-items: center;

  padding-top: 18px;
  padding-bottom: 18px;
`;

export const HeaderLogoStyle = styled.div`
  overflow: hidden;
  flex-shrink: 0;

  ${({ theme }) => theme.mediaQueries.md} {
    width: 14px;
  }
`;

export const HeaderActionsStyle = styled.div`
  overflow: hidden;

  display: flex;
  align-items: center;
  flex-shrink: 1;

  margin-left: auto;
`;
