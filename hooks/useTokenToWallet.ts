import { useWeb3React } from '@web3-react/core';
import { getTokenAddress, TOKENS } from 'config';
import { createRpcTokenContract } from 'utils';
import { useCallback } from 'react';
import { useChain } from './useChain';
import { toastError } from 'components/toasts';
import { useConfig } from './useConfig';

type UseTokenToWallet = (token: TOKENS) => {
  handleAdd: () => void;
  canAdd: boolean;
};

export const useTokenToWallet: UseTokenToWallet = (token) => {
  const chainId = useChain();
  const { connectors } = useConfig();
  const { library, connector } = useWeb3React();

  const handleAdd = useCallback(async () => {
    try {
      const address = getTokenAddress(chainId, token);
      const contract = createRpcTokenContract(chainId, token);

      const [symbol, decimals] = await Promise.all([
        contract.symbol(),
        contract.decimals(),
      ]);

      await library.provider.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address,
            symbol,
            decimals,
          },
        },
      });
    } catch (error) {
      toastError(error);
    }
  }, [chainId, token, library.provider]);

  const canAdd = connector === connectors.metamask;

  return {
    handleAdd,
    canAdd,
  };
};
