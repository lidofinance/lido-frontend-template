import { TX_STAGE } from 'components/txStageModal';

const sleep = (milliseconds: number) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

const stakeProcessing = async (
  openTxModal: () => void,
  setTxStage: (value: TX_STAGE) => void,
) => {
  openTxModal();
  setTxStage(TX_STAGE.BLOCK);

  await sleep(3000);

  if (Math.random() > 0.3) {
    setTxStage(TX_STAGE.SUCCESS);
  } else {
    setTxStage(TX_STAGE.FAIL);
  }
};

export { stakeProcessing };
