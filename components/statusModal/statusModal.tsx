import React, { FC } from 'react';
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
  retry: boolean;
  onClose: () => void;
  onRetry?: (e: any) => void;
}

const statusModal: FC<Props> = ({
  title,
  subtitle,
  additionalDetails,
  link,
  type,
  show,
  retry,
  onClose,
  onRetry,
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
          <Error color="#E14D4D" height={64} width={64} />
        ) : (
          <Success color="#53BA95" height={64} width={64} />
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
      {retry ? <Link onClick={onRetry}>Retry</Link> : null}
    </Modal>
  );
};

export default statusModal;
