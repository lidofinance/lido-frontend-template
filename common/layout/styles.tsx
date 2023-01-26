import { H1 } from '@lidofinance/lido-ui';
import styled from 'styled-components';

export const LayoutTitleStyle = styled(H1)`
  margin-bottom: 0.2em;

  font-weight: 800;
  font-size: ${({ theme }) => theme.fontSizesMap.xl}px;
  line-height: 1.2em;
  text-align: center;

  &:empty {
    display: none;
  }
`;

export const LayoutSubTitleStyle = styled.h2`
  margin-bottom: ${({ theme }) => theme.spaceMap.md}px;

  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizesMap.xxs}px;
  line-height: 1.5em;
  text-align: center;
  color: var(--lido-color-textSecondary);

  &:empty {
    display: none;
  }
`;
