import { FC, FormEventHandler } from 'react';
import { trackEvent, MatomoEventType } from '@lidofinance/analytics-matomo';
import { Block, Input, Steth, Button } from '@lidofinance/lido-ui';

import { InputWrapper } from './styles';

const submitTrackEvent = () => {
  // PAY ATTENTION: Remove. Example just to showing how to use a matomo events tracking
  // TODO: move matomo event to config
  const matomoSomeEvent: MatomoEventType = [
    'Lido_Frontend_Template',
    'Stake form submit',
    'stake_form_submit',
  ];
  // More details: https://github.com/lidofinance/warehouse/tree/main/packages/analytics/matomo
  trackEvent(...matomoSomeEvent);
};

const StakeForm: FC = () => {
  const handleSubmit: FormEventHandler<HTMLFormElement> | undefined = (
    event,
  ) => {
    event.preventDefault();
    submitTrackEvent();
    // TODO: remove
    alert('Submitted');
  };

  return (
    <Block>
      {/* TODO: remove <form> */}
      <form action="" method="post" onSubmit={handleSubmit}>
        <InputWrapper>
          <Input
            fullwidth
            placeholder="0"
            leftDecorator={<Steth />}
            label="Token amount"
          />
        </InputWrapper>
        <Button fullwidth type="submit">
          Submit
        </Button>
      </form>
    </Block>
  );
};

export default StakeForm;
