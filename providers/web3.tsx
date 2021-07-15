import { FC, useMemo } from 'react';
import { ProviderWeb3 } from '@lido-sdk/web3-react';
import { backendRPC } from 'config';

export type EnvConfig = {
  defaultChain: string;
  supportedChains: string;
};

export type Config = {
  defaultChain: number;
  supportedChainIds: number[];
};

export type Web3ProviderProps = { config: EnvConfig };

const Web3Provider: FC<Web3ProviderProps> = ({ children, config }) => {
  const defaultChainId = parseInt(config.defaultChain);

  const supportedChainIds = useMemo(() => {
    return config.supportedChains
      .split(',')
      .map((value: string) => parseInt(value));
  }, [config.supportedChains]);

  return (
    <ProviderWeb3
      defaultChainId={defaultChainId}
      supportedChainIds={supportedChainIds}
      rpc={backendRPC}
    >
      {children}
    </ProviderWeb3>
  );
};

export default Web3Provider;
