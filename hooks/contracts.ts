import { contractHooksFactory } from '@lido-sdk/react';
import { getMaticAddress, getLidoMaticAddress } from 'config';
import { LidoMatic__factory, ETHGoerli__factory } from 'generated';

const lidoMatic = contractHooksFactory(LidoMatic__factory, (chainId) =>
  getLidoMaticAddress(chainId),
);
export const useLidoMaticRPC = lidoMatic.useContractRPC;
export const useLidoMaticWeb3 = lidoMatic.useContractWeb3;

const maticToken = contractHooksFactory(ETHGoerli__factory, (chainId) =>
  getMaticAddress(chainId),
);
export const useMaticTokenRPC = maticToken.useContractRPC;
export const useMaticTokenWeb3 = maticToken.useContractWeb3;
