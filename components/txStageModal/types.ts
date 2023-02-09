import { ModalProps } from '@lidofinance/lido-ui';

import { TX_STAGE } from 'components/txStageModal';

export type TxStageModalProps = ModalProps & {
  txStage: TX_STAGE;
};
