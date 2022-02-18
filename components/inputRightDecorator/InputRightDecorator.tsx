/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import styled from 'styled-components';

import { FC, useRef, useState } from 'react';
import { Button, Popover } from '@lidofinance/lido-ui';

import batteryLow from 'public/icons/low-battery.svg';
import batteryHalf from 'public/icons/half-battery.svg';
import batteryFull from 'public/icons/full-battery.svg';
import { formatCash } from 'utils/formatNumberToCurrency';
import ProgressBar from 'components/progressBar/progressBar';

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 12px;
    cursor: pointer;
  }

  p {
    font-weight: 400;
    font-size: 12px:
    line-height: 20px;
  }
`;

const MaxButton = styled(Button)`
  letter-spacing: 0.4px;
`;
const TotalStake = styled.div`
  margin-top: 16px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;
const PopoverContent = styled.div`
  width: 100%;
`;

interface InputRightDecoratorProps {
  hardCapLimit: number;
  currentlyStakedAmount: number;
  currentStakeCapacityPercentage: number;
  onClick: () => void;
  disabled: boolean;
}

const InputRightDecorator: FC<InputRightDecoratorProps> = ({
  hardCapLimit,
  currentlyStakedAmount,
  currentStakeCapacityPercentage,
  onClick,
  disabled,
}) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const anchorRef = useRef<HTMLImageElement>(null);
  const handleToggle = () => {
    setIsPopoverOpen((state) => !state);
  };
  return (
    <Wrapper>
      {hardCapLimit ? (
        <>
          <img
            src={
              currentStakeCapacityPercentage >= 100
                ? batteryFull
                : currentStakeCapacityPercentage < 100 &&
                  currentStakeCapacityPercentage >= 50
                ? batteryHalf
                : batteryLow
            }
            alt="current stake"
            width="24"
            height="24"
            ref={anchorRef}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleToggle();
            }}
          />
          <Popover
            style={{
              backgroundColor: '#27272e',
              color: '#ffffff',
              fontSize: '12px',
              lineHeight: '20px',
              maxWidth: '276px',
              padding: '12px 12px 20px',
            }}
            open={isPopoverOpen}
            onClose={() => setIsPopoverOpen(false)}
            placement="bottom"
            anchorRef={anchorRef}
          >
            <PopoverContent>
              <p>
                There is a limit for a total stake amount for Polygon network.
                Please note that after the total stake limit is reached, staking
                function will be disabled until the limit is removed. For more
                information please{' '}
                <a
                  href="https://news.shardlabs.io/lido-for-polygon-launch-plan-f08a5163619b"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  visit here.
                </a>
              </p>
              <TotalStake>
                <span>Total stake capacity: </span>
                <span>{`$${formatCash(currentlyStakedAmount)} / $${formatCash(
                  10000000,
                )} (${currentStakeCapacityPercentage.toFixed(2)}%)`}</span>
              </TotalStake>
              <ProgressBar completed={currentStakeCapacityPercentage} />
            </PopoverContent>
          </Popover>
        </>
      ) : null}

      <MaxButton
        disabled={disabled}
        size="xxs"
        variant="translucent"
        onClick={onClick}
      >
        MAX
      </MaxButton>
    </Wrapper>
  );
};

export default InputRightDecorator;
