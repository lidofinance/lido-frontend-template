import {
  CHAINS,
  getRewardsAddress,
  getRpcPath,
  getRewardsContractFactory,
} from 'config';
import { JsonRpcProvider } from '@ethersproject/providers';
import { Signer } from '@ethersproject/abstract-signer';
import { RewardsAbi } from 'generated';

export const createRpcRewardsContract = (chainId: CHAINS): RewardsAbi => {
  const address = getRewardsAddress(chainId);
  const library = new JsonRpcProvider(getRpcPath(chainId), chainId);

  const contractFactory = getRewardsContractFactory();
  return contractFactory.connect(address, library);
};

export const createWeb3RewardsContract = (
  chainId: CHAINS,
  library: { getSigner: () => Signer },
): RewardsAbi | null => {
  const address = getRewardsAddress(chainId);
  if (!library) return null;

  const contractFactory = getRewardsContractFactory();
  return contractFactory.connect(address, library.getSigner());
};
