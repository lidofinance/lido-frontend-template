import { hooksFactory } from '@lido-sdk/react';
import { getSTMaticAddress } from 'config';

const { useTokenBalance } = hooksFactory(getSTMaticAddress);

export { useTokenBalance as useSTMATBalance };
