import { BigNumber } from 'ethers';
import { formatEther } from '@ethersproject/units';

// not safe, use only for approximate calculations
export const weiToEth = (wei: BigNumber): number => {
  return parseFloat(formatEther(wei));
};
