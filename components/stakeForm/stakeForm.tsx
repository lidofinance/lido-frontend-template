import { FC, useCallback, useState, EventHandler, SyntheticEvent } from 'react';
import { trackEvent } from '@lidofinance/analytics-matomo';
import { Block, Input, Steth, Button } from '@lidofinance/lido-ui';

import { MATOMO_CLICK_EVENTS } from 'config';
import TxStageModal, { TX_STAGE } from 'components/txStageModal';

import FutureTxInfo from './components/futureTxInfo';
import { InputWrapper, PseudoFormWrapper } from './styles';
import { stakeProcessing } from './utils';

const submitTrackEvent = () => {
  // PAY ATTENTION: Remove. Example just to showing how to use a matomo events tracking
  // More details: https://github.com/lidofinance/warehouse/tree/main/packages/analytics/matomo
  trackEvent(...MATOMO_CLICK_EVENTS.submitStake);
};

const StakeForm: FC = () => {
  // Modals
  const [isTxModalOpen, setIsTxModalOpen] = useState<boolean>(false);

  const openTxModal = useCallback(() => {
    setIsTxModalOpen(true);
  }, []);

  const closeTxModal = useCallback(() => {
    setIsTxModalOpen(false);
  }, []);

  const [txStage, setTxStage] = useState(TX_STAGE.IDLE);
  // /Modals

  const handleSubmit: EventHandler<SyntheticEvent> = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async (event) => {
      submitTrackEvent();
      await stakeProcessing(openTxModal, setTxStage);
    },
    [openTxModal],
  );

  return (
    <>
      <Block>
        <PseudoFormWrapper>
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
        </PseudoFormWrapper>

        <FutureTxInfo />
      </Block>

      <TxStageModal
        open={isTxModalOpen}
        onClose={closeTxModal}
        txStage={txStage}
      />
    </>
  );
};

export default StakeForm;
