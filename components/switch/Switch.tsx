import React, { FC } from 'react';
import { SwitchWrapper, SwitchSlider, SwitchLabel } from './SwitchStyles';

interface Props {
  optionOne?: string;
  optionTwo?: string;
  isToggled: boolean;
  onToggle: React.MouseEventHandler<HTMLDivElement> & (() => void);
}

const Switch: FC<Props> = ({ optionOne, optionTwo, isToggled, onToggle }) => {
  return (
    <SwitchWrapper onClick={onToggle}>
      <SwitchSlider isToggled={isToggled} />
      <SwitchLabel isToggled={isToggled}>{optionOne}</SwitchLabel>
      <SwitchLabel isToggled={!isToggled}>{optionTwo}</SwitchLabel>
    </SwitchWrapper>
  );
};

export default Switch;
