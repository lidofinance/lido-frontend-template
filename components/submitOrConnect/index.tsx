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
  isLoading: boolean;
  label: string;
  disabled?: boolean;
  fullwidth?: boolean;
  submit?: (e: any) => void;
  unlock?: (e: any) => void;
}

const SubmitOrConnect: FC<Props> = ({
  isLoading,
  label,
  submit,
  disabled,
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
              disabled={isLoading}
              loading={isLoading}
              style={{ marginRight: '15px', flexGrow: 1 }}
            >
              Unlock Tokens
            </Button>
          ) : null}
          <Button
            type="submit"
            disabled={isLoading || disabled}
            loading={isLoading}
            onClick={submit}
            style={{ flexGrow: 1 }}
          >
            {label}
          </Button>
        </>
      ) : (
        <WalletConnect fullwidth />
      )}
    </ButtonWrapper>
  );
};

export default SubmitOrConnect;
