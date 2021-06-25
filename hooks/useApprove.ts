import { BigNumber } from '@ethersproject/bignumber';
import { useWeb3React } from '@web3-react/core';
import { transaction } from 'components/transaction';
import { TOKENS } from 'config';
import { useAllowance, useChain, useMountedState } from 'hooks';
import { useCallback } from 'react';
import { assert, createWeb3TokenContract } from 'utils';

type UseApproveResult = {
  approve: () => void;
  approving: boolean;
  needsApprove: boolean;
};

export const useApprove = <T extends TOKENS>(
  amount: BigNumber,
  token: T,
  spender: string,
): UseApproveResult => {
  const [approving, setApproving] = useMountedState(false);

  const { allowance, initialLoading, invalidateAllowance } = useAllowance(
    token,
    spender,
  );
  const chainId = useChain();
  const { library } = useWeb3React();

  const needsApprove =
    !initialLoading && !amount.isZero() && amount.gt(allowance);

  const approve = useCallback(async () => {
    const contract = createWeb3TokenContract(chainId, token, library);
    assert(contract, `Approve ${token}`, 'Contract not found');
    setApproving(true);

    await transaction(`Approve ${token}`, chainId, () =>
      contract.approve(spender, amount),
    );
    await invalidateAllowance();

    setApproving(false);
  }, [
    amount,
    chainId,
    invalidateAllowance,
    setApproving,
    library,
    spender,
    token,
  ]);

  return {
    approve,
    approving,
    needsApprove,
  };
};
