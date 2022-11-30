import { FC } from 'react';
import { ProviderWeb3 } from '@lido-sdk/web3-react';
import { backendRPC } from 'config';
import dynamics from '../config/dynamics';

export type EnvConfig = {
  defaultChain: string;
  supportedChains: string;
};

const Web3Provider: FC = ({ children }) => (
  <ProviderWeb3
    defaultChainId={dynamics.defaultChain}
    supportedChainIds={dynamics.supportedChains}
    rpc={backendRPC}
  >
    {children}
  </ProviderWeb3>
);

export default Web3Provider;
