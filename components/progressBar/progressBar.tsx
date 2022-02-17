import { FC } from 'react';
import styled from 'styled-components';

type ProgressBarProps = {
  completed: number;
};

const Container = styled.div`
  max-width: 252px;
  height: 4px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
`;
const Filler = styled.div`
  height: 100%;
  background-color: #53ba95;
  opacity: 1;
  border-radius: inherit;
`;

const ProgressBar: FC<ProgressBarProps> = ({ completed }) => {
  return (
    <Container>
      <Filler style={{ width: `${completed}%` }}></Filler>
    </Container>
  );
};

export default ProgressBar;
