import {
  CHAINS,
  getTokenAddress,
  getRpcPath,
  getTokenContractFactory,
  TOKENS,
  ContractByToken,
} from 'config';
import { JsonRpcProvider } from '@ethersproject/providers';
import { Signer } from '@ethersproject/abstract-signer';

export const createRpcTokenContract = <T extends TOKENS>(
  chainId: CHAINS,
  token: T,
): ContractByToken<T> => {
  const address = getTokenAddress(chainId, token);
  const library = new JsonRpcProvider(getRpcPath(chainId), chainId);

  const contractFactory = getTokenContractFactory<T>(token);
  return contractFactory.connect(address, library) as ContractByToken<T>;
};

export const createWeb3TokenContract = <T extends TOKENS>(
  chainId: CHAINS,
  token: T,
  library: { getSigner: () => Signer },
): ContractByToken<T> | null => {
  const address = getTokenAddress(chainId, token);
  if (!library) return null;

  const contractFactory = getTokenContractFactory<T>(token);
  return contractFactory.connect(
    address,
    library.getSigner(),
  ) as ContractByToken<T>;
};
