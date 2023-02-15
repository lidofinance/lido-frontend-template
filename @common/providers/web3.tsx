import { FC, PropsWithChildren } from 'react';
import { ProviderWeb3, ProviderWeb3Props } from '@reef-knot/web3-react';

export type Web3ProviderProps = ProviderWeb3Props;

const Web3Provider: FC<PropsWithChildren<Web3ProviderProps>> = ({
  children,
  ...props
}) => {
  return <ProviderWeb3 {...props}>{children}</ProviderWeb3>;
};

export default Web3Provider;
