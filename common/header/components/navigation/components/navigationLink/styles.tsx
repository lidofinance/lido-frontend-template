import styled from 'styled-components';

export const NavigationLinkStyle = styled.a<{ active: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-size: ${({ theme }) => theme.fontSizesMap.xxxs}px;
  line-height: 1.7em;
  font-weight: 800;
  text-transform: uppercase;
  text-decoration: none !important;
  letter-spacing: 0.04em;
  color: var(--lido-color-secondary);

  opacity: ${(props) => (props.active ? 1 : 0.8)};
  cursor: pointer;

  :hover {
    color: var(--lido-color-secondary);
    opacity: 1;
  }
  :visited {
    color: var(--lido-color-secondary);
  }
  :not(:last-of-type) {
    margin-right: 32px;
  }

  svg {
    fill: ${({ active }) =>
      active ? `var(--lido-color-primary)` : `var(--lido-color-secondary)`};
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    flex-direction: column;
    text-transform: none;
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizesMap.xxxs}px;
    line-height: 1.2em;
    letter-spacing: 0;
  }
`;
