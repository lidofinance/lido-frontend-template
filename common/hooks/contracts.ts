import { contractHooksFactory } from '@lido-sdk/react';
import { getExampleAddress } from 'config';
import { ExampleAbi__factory } from 'generated';

const example = contractHooksFactory(ExampleAbi__factory, (chainId) =>
  getExampleAddress(chainId),
);
export const useExampleContractRPC = example.useContractRPC;
export const useExampleContractWeb3 = example.useContractWeb3;
