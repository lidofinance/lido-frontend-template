import { FC, EventHandler, SyntheticEvent } from 'react';
import { trackEvent } from '@lidofinance/analytics-matomo';
import { Block, Input, Steth, Button } from '@lidofinance/lido-ui';

import { MATOMO_CLICK_EVENTS } from 'config';

import { InputWrapper } from './styles';

const submitTrackEvent = () => {
  // PAY ATTENTION: Remove. Example just to showing how to use a matomo events tracking
  // More details: https://github.com/lidofinance/warehouse/tree/main/packages/analytics/matomo
  trackEvent(...MATOMO_CLICK_EVENTS.submitStake);
};

const StakeForm: FC = () => {
  const handleSubmit: EventHandler<SyntheticEvent> | undefined = () => {
    submitTrackEvent();
    // TODO: remove alert
    // TODO: make a user flow like in stake.lido.fi with emulation trx
    // TODO: 1. loading modal (with timeout 3sec)
    // TODO: 2. success trx model
    alert('Submitted');
  };

  return (
    <Block>
      <InputWrapper>
        <Input
          fullwidth
          placeholder="0"
          leftDecorator={<Steth />}
          label="Token amount"
        />
      </InputWrapper>
      <Button fullwidth onClick={handleSubmit}>
        Submit
      </Button>
    </Block>
  );
};

export default StakeForm;
