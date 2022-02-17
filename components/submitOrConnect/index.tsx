import { FC } from 'react';
import { Button } from '@lidofinance/lido-ui';
import WalletConnect from 'components/walletConnect/walletConnect';
import { useSDK } from '@lido-sdk/react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spaceMap.md}px;
  margin-bottom: ${({ theme }) => theme.spaceMap.xxl}px;
  display: flex;
`;

interface Props {
  unlockLabel?: string;
  submitLabel: string;
  disabledUnlock?: boolean;
  disabledSubmit?: boolean;
  isSubmitting: boolean;
  isUnlocking?: boolean;
  fullwidth?: boolean;
  submit?: (e: any) => void;
  unlock?: (e: any) => void;
}

const SubmitOrConnect: FC<Props> = ({
  unlockLabel,
  submitLabel,
  submit,
  disabledUnlock,
  disabledSubmit,
  isUnlocking,
  isSubmitting,
  unlock,
}) => {
  const { account } = useSDK();
  return (
    <ButtonWrapper>
      {account ? (
        <>
          {unlock ? (
            <Button
              onClick={unlock}
              disabled={disabledUnlock || isUnlocking}
              loading={isUnlocking}
              style={{ marginRight: '15px', flexGrow: 1 }}
            >
              {unlockLabel}
            </Button>
          ) : null}
          <Button
            type="submit"
            disabled={isSubmitting || disabledSubmit}
            loading={isSubmitting}
            onClick={submit}
            style={{ flexGrow: 1 }}
          >
            {submitLabel}
          </Button>
        </>
      ) : (
        <WalletConnect fullwidth />
      )}
    </ButtonWrapper>
  );
};

export default SubmitOrConnect;
