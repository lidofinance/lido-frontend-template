import { FC } from 'react';
import {
  Modal,
  Loader,
  Text,
  Link,
  Success,
  Error,
} from '@lidofinance/lido-ui';

import { TxStageModalProps } from './types';
import { TX_STAGE } from './enums';

const TxStageModal: FC<TxStageModalProps> = ({ txStage, ...modalProps }) => {
  if (txStage == TX_STAGE.BLOCK) {
    return (
      <Modal
        {...modalProps}
        center={true}
        titleIcon={<Loader size={'large'} />}
        title={'You are now staking N ETH'}
        subtitle={'Staking N ETH. You will receive N stETH'}
        onClose={modalProps.onClose}
      >
        <br />
        <Text color="secondary" size="xxs">
          This transaction will confirmed in 3 seconds
        </Text>
      </Modal>
    );
  } else if (txStage == TX_STAGE.SUCCESS) {
    return (
      <Modal
        {...modalProps}
        center={true}
        titleIcon={<Success color={'green'} width={64} height={64} />}
        title={'Your new balance is N stETH'}
        subtitle={'Staking operation was successful'}
        onClose={modalProps.onClose}
      >
        <br />
        <Link href={'https://etherscan.io/'}>View on Etherscan</Link>
      </Modal>
    );
  } else if (txStage == TX_STAGE.FAIL) {
    return (
      <Modal
        {...modalProps}
        center={true}
        titleIcon={<Error color={'red'} width={64} height={64} />}
        title={'Something went wrong'}
        subtitle={'Staking operation was not successful'}
        onClose={modalProps.onClose}
      />
    );
  } else {
    return null;
  }
};

export default TxStageModal;
