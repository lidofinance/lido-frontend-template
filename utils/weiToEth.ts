import { BigNumber, utils as ethersUtils } from 'ethers';

// not safe, use only for approximate calculations
export const weiToEth = (wei: BigNumber): number => {
  return parseFloat(ethersUtils.formatEther(wei));
};
