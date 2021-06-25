import { ButtonProps } from '@lidofinance/lido-ui';

export type ConnectButtonProps = {
  iconSrc: string;
} & ButtonProps;

export type ConnectWalletProps = {
  onConnect?: () => void;
} & ButtonProps;
