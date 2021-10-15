import { hooksFactory } from '@lido-sdk/react';
import { getSTMaticAddress } from 'config';

const {
  useTokenBalance,
  // useTotalSupply,
  // useDecimals,
  // useAllowance,
  // useApprove,
} = hooksFactory(getSTMaticAddress);

export { useTokenBalance as useSTMATBalance };
