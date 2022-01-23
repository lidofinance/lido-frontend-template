import { FC } from 'react';
import { Button } from '@lidofinance/lido-ui';
import WalletConnect from 'components/walletConnect/walletConnect';
import { useSDK } from '@lido-sdk/react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spaceMap.md}px;
  margin-bottom: ${({ theme }) => theme.spaceMap.xxl}px;
`;

interface Props {
  isLoading: boolean;
  label: string;
  submit?: (e: any) => void;
}

const SubmitOrConnect: FC<Props> = ({ isLoading, label, submit }) => {
  const { account } = useSDK();
  return (
    <ButtonWrapper>
      {account ? (
        <Button
          fullwidth
          type="submit"
          disabled={isLoading}
          loading={isLoading}
          onClick={submit}
        >
          {label}
        </Button>
      ) : (
        <WalletConnect fullwidth />
      )}
    </ButtonWrapper>
  )
};

export default SubmitOrConnect;
