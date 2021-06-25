import styled from 'styled-components';

export const BackgroundGradientSvgStyle = styled.svg<{
  width: number;
  height: number;
}>`
  position: fixed;
  z-index: -1;
  top: 50%;
  left: 50%;
  margin: ${({ height }) => -height / 2}px 0 0 ${({ width }) => -width / 2}px;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  pointer-events: none;
`;

export const BackgroundGradientStartStyle = styled.stop`
  stop-color: ${({ theme }) => theme.colors.primary};
`;

export const BackgroundGradientStopStyle = styled.stop`
  stop-color: ${({ theme }) => theme.colors.background};
`;
