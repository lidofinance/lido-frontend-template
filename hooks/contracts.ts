import { contractHooksFactory } from '@lido-sdk/react';
import {
  getMaticAddress,
  getLidoMaticAddress,
  getLidoNFTAddress,
  getStakeManagerAddress,
} from 'config';
import {
  LidoMatic__factory,
  MaticToken__factory,
  LidoNFT__factory,
  StakeManager__factory,
} from 'generated';

const lidoMatic = contractHooksFactory(LidoMatic__factory, (chainId) =>
  getLidoMaticAddress(chainId),
);
export const useLidoMaticRPC = lidoMatic.useContractRPC;
export const useLidoMaticWeb3 = lidoMatic.useContractWeb3;

const maticToken = contractHooksFactory(MaticToken__factory, (chainId) =>
  getMaticAddress(chainId),
);
export const useMaticTokenRPC = maticToken.useContractRPC;
export const useMaticTokenWeb3 = maticToken.useContractWeb3;

const lidoNFT = contractHooksFactory(LidoNFT__factory, (chainId) =>
  getLidoNFTAddress(chainId),
);
export const useLidoNFTRPC = lidoNFT.useContractRPC;
export const useLidoNFTWeb3 = lidoNFT.useContractWeb3;

const stakeManager = contractHooksFactory(StakeManager__factory, (chainId) =>
  getStakeManagerAddress(chainId),
);

export const useStakeManagerRPC = stakeManager.useContractRPC;
export const useStakeManagerWeb3 = stakeManager.useContractWeb3;
