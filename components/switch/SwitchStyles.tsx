import styled from 'styled-components';

interface Props {
  onClick: () => void;
}

export const SwitchWrapper = styled.div<Props>`
  width: 268px;
  height: 44px;
  background-color: rgb(226, 230, 235);
  border-radius: 22px;
  position: relative;
  display: flex;
  justify-content: space-around;
  -webkit-box-align: center;
  align-items: center;
  user-select: none;
  margin: 0px auto 15px auto;
`;
export const SwitchSlider = styled.div<{ isToggled: boolean }>`
  width: 132px;
  height: 40px;
  background-color: white;
  border-radius: 20px;
  position: absolute;
  transition: left 0.3s ease 0s;
  top: 2px;
  z-index: 1;
  left: ${(props) => (props.isToggled ? `calc(100% - 134px)` : `2px`)};
`;
export const SwitchLabel = styled.p<{ isToggled: boolean }>`
  z-index: 2;
  margin: 0px;
  opacity: ${(props) => (props.isToggled ? `0.5` : `1`)};
  transition: opacity 0.3s ease 0s;
  line-height: 1.6em;
`;
