import { FC } from 'react';
import {
  Text,
  Modal,
  Loader,
  Error,
  Success,
  Link,
} from '@lidofinance/lido-ui';

interface Props {
  title: string;
  subtitle: string;
  additionalDetails: string;
  link: string;
  type: string;
  show: boolean;
  onClose: () => void;
}

const statusModal: FC<Props> = ({
  title,
  subtitle,
  additionalDetails,
  link,
  type,
  show,
  onClose,
}) => {
  return (
    <Modal
      open={show}
      center
      onClose={onClose}
      title={title}
      titleIcon={
        type === 'loading' ? (
          <Loader size="large" />
        ) : type === 'error' ? (
          <Error color="red" height={64} width={64} />
        ) : (
          <Success color="green" height={64} width={64} />
        )
      }
    >
      <Text color="secondary" size="xxs">
        {subtitle}
      </Text>
      <br />
      <br />
      {additionalDetails ? (
        <Text color="secondary" size="xxs">
          {additionalDetails}
        </Text>
      ) : null}
      {link ? <Link href={link}>View on Etherscan</Link> : null}
    </Modal>
  );
};

export default statusModal;
