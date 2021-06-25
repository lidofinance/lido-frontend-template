import { WalletCard } from 'components/walletCard';
import styled from 'styled-components';

export const FallbackWalletStyle = styled(WalletCard)`
  text-align: center;
  background: ${({ theme }) => theme.colors.error};
  background-image: none !important;
`;
