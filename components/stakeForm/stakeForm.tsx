import {
  FC,
  useCallback,
  useState,
  EventHandler,
  SyntheticEvent,
  FormEvent,
} from 'react';
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

  // Form
  const [inputAmount, setInputAmount] = useState<number>(0);

  const handleInputChange: EventHandler<FormEvent<HTMLInputElement>> =
    useCallback((event) => {
      const rawValue = event.currentTarget.value;

      if (!rawValue) {
        setInputAmount(0);
      }

      try {
        setInputAmount(Number(rawValue));
      } catch {
        setInputAmount(0);
      }
    }, []);

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  const handleSubmit: EventHandler<SyntheticEvent> = useCallback(async () => {
    submitTrackEvent();
    await stakeProcessing(openTxModal, setTxStage);
  }, [openTxModal]);
  // /Form

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
              onChange={handleInputChange}
            />
          </InputWrapper>
          <Button fullwidth onClick={handleSubmit}>
            Submit
          </Button>
        </PseudoFormWrapper>

        <FutureTxInfo amount={inputAmount} />
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
