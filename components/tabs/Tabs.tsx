import React, { FC } from 'react';
import { TabWrapper, TabSlider, TabLabel } from './TabStyles';

interface Props {
  options: string[];
  selected: string;
  onSelectTab: (option: string) => void;
}

const Switch: FC<Props> = ({ options, selected, onSelectTab }) => {
  const selectedOption = options.indexOf(selected);
  return (
    <TabWrapper>
      <TabSlider selectedOption={selectedOption} />
      {options.map((option) => (
        <TabLabel
          isSelected={selected === option}
          key={option}
          onClick={() => onSelectTab(option)}
        >
          {option}
        </TabLabel>
      ))}
    </TabWrapper>
  );
};

export default Switch;
