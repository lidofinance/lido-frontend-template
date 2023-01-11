import styled from 'styled-components';
import { WalletCard } from 'components/walletCard';

export const FallbackWalletStyle = styled(WalletCard)`
  text-align: center;
  background: var(--lido-color-error);
  background-image: none !important;
`;
