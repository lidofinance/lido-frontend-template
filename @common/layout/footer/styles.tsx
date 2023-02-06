import { Container, Divider, Link } from '@lidofinance/lido-ui';
import styled from 'styled-components';

export const FooterStyle = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  padding-top: 60px;
  padding-bottom: 20px;
  color: var(--lido-color-text);

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-top: 40px;
  }
`;

export const FooterDivider = styled(Divider)`
  flex-basis: 100%;
  margin-bottom: 60px;

  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 40px;
  }
`;

export const FooterLogo = styled.div`
  flex-grow: 1;
  margin-bottom: 40px;
  box-sizing: border-box;

  ${({ theme }) => theme.mediaQueries.lg} {
    flex-basis: 100%;
    order: 2;
  }
`;

export const FooterGroup = styled.div`
  flex-grow: 1;
  margin-bottom: 40px;
  padding-right: 20px;

  &:last-child {
    padding-right: 0;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    flex-basis: 100%;
  }
`;

export const FooterTitle = styled.h4`
  margin: 0 0 1em;

  font-weight: 800;
  font-size: ${({ theme }) => theme.fontSizesMap.sm}px;
  line-height: 1.4em;
`;

export const FooterItemText = styled.div`
  margin: 0 0 0.8em;

  font-size: ${({ theme }) => theme.fontSizesMap.xs}px;
  line-height: 1.6em;
`;

export const FooterItemLink = styled(Link)`
  display: block;
  margin: 0 0 0.8em;

  font-size: ${({ theme }) => theme.fontSizesMap.xs}px;
  line-height: 1.6em;
  text-decoration: none;
  opacity: 0.7;

  &,
  &:hover {
    color: var(--lido-color-text);
  }

  &:hover {
    opacity: 1;
  }
`;
