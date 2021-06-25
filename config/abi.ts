import { TOKENS } from './tokens';
import { Erc20Abi__factory } from 'generated';

export const CONTRACT_FACTORY_TOKEN = {
  [TOKENS.steth]: Erc20Abi__factory,
} as const;

export type ContractFactoryList = typeof CONTRACT_FACTORY_TOKEN;
export type ContractByToken<T extends TOKENS> = ReturnType<
  ContractFactoryList[T]['connect']
>;

export const getTokenContractFactory = <T extends TOKENS>(
  token: T,
): ContractFactoryList[T] => {
  return CONTRACT_FACTORY_TOKEN[token];
};
