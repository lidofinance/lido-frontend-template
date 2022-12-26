import styled, { css } from 'styled-components';

export const desktopCss = css`
  margin: 0 46px;
  display: flex;
  svg {
    margin-right: 10px;
  }
`;

const mobileCss = css`
  margin: 0;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 8px;
  background-color: var(--lido-color-foreground);
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid var(--lido-color-border);
  svg {
    margin-right: 0;
    margin-bottom: 7px;
  }
`;

export const Nav = styled.div`
  ${desktopCss}
  ${({ theme }) => theme.mediaQueries.lg} {
    ${mobileCss}
  }
  z-index: 6;
`;
