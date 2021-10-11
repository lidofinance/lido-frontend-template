import { ButtonProps } from '@lidofinance/lido-ui';

export type ConnectButtonProps = {
  iconSrc: string;
  isTooltipTriggerShown?: boolean;
  tooltipMessage?: string;
} & ButtonProps;

export type ConnectWalletProps = {
  onConnect?: () => void;
  termsChecked?: boolean;
} & ButtonProps;
