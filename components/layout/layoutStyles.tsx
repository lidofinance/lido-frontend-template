import { H1 } from '@lidofinance/lido-ui';
import styled from 'styled-components';

export const LayoutTitleStyle = styled(H1)`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizesMap.xl}px;
  line-height: 1.2em;
  text-align: center;

  &:empty {
    display: none;
  }
`;

export const LayoutSubTitleStyle = styled.h4`
  font-weight: normal;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spaceMap.md}px;
  font-size: ${({ theme }) => theme.fontSizesMap.xs}px;
  line-height: 1.5em;
  text-align: center;

  &:empty {
    display: none;
  }
`;
