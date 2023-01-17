import styled, { css } from 'styled-components';

export const desktopCss = css`
  display: flex;
  margin: 0 46px;

  svg {
    margin-right: 10px;
  }
`;

const mobileCss = css`
  display: flex;
  justify-content: space-around;
  align-items: center;

  position: fixed;
  padding: 8px;
  margin: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: var(--lido-color-foreground);
  border-top: 1px solid var(--lido-color-border);

  svg {
    margin-right: 0;
    margin-bottom: 7px;
  }
`;

export const NavigationStyle = styled.div`
  ${desktopCss}

  ${({ theme }) => theme.mediaQueries.lg} {
    ${mobileCss}
  }

  z-index: 6;
`;
