import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';
import { CHAINS, getRpcPath } from 'config';
import { createContext, memo, useMemo } from 'react';
import { Provider } from './types';

export type EnvConfig = {
  defaultChain: string;
  supportedChains: string;
};

export type Config = {
  defaultChain: number;
  supportedChainIds: number[];
};

export type ConfigContextValue = {
  config: Config;
  connectors: {
    metamask: InjectedConnector;
    trust: InjectedConnector;
    imtoken: InjectedConnector;
    walletconnect: WalletConnectConnector | null;
    coinbase: WalletLinkConnector | null;
  };
};

export type ConfigProviderProps = { config: EnvConfig };

export const ConfigContext = createContext({} as ConfigContextValue);

const ConfigProvider: Provider<ConfigProviderProps> = (props) => {
  const { children, config } = props;

  const defaultChain = parseInt(config.defaultChain);
  const baseUrl = typeof window === 'undefined' ? '' : window.location.origin;

  const supportedChainIds = useMemo(() => {
    return config.supportedChains
      .split(',')
      .map((value: string) => parseInt(value));
  }, [config.supportedChains]);

  const isMainnetSupported = supportedChainIds.includes(CHAINS.Mainnet);

  const metamask = useMemo(
    () => new InjectedConnector({ supportedChainIds }),
    [supportedChainIds],
  );

  const trust = useMemo(
    () => new InjectedConnector({ supportedChainIds }),
    [supportedChainIds],
  );

  const imtoken = useMemo(
    () => new InjectedConnector({ supportedChainIds }),
    [supportedChainIds],
  );

  // const walletconnect = useMemo(() => {
  //   return isMainnetSupported
  //     ? new WalletConnectConnector({
  //         // It supports multiple chains, but doesn't emit events on changeChain
  //         // So, fix only one network to avoid mistakes
  //         supportedChainIds: [CHAINS.Mainnet],
  //         rpc: { [CHAINS.Mainnet]: getRpcPath(CHAINS.Mainnet) },
  //       })
  //     : null;
  // }, [isMainnetSupported]);

  const walletconnect = useMemo(() => {
    return new WalletConnectConnector({
      supportedChainIds,
      rpc: supportedChainIds.reduce((acc: Record<number, string>, chainId) => {
        acc[chainId] = getRpcPath(chainId);
        return acc;
      }, {}),
    });
  }, [supportedChainIds]);

  const coinbase = useMemo(() => {
    return isMainnetSupported
      ? new WalletLinkConnector({
          // It's support only mainnet
          // https://github.com/NoahZinsmeister/web3-react/blob/v6/packages/walletlink-connector/src/index.ts
          url: getRpcPath(CHAINS.Mainnet),
          appName: 'Lido Template',
          appLogoUrl: `${baseUrl}/apple-touch-icon.png`,
          darkMode: false,
        })
      : null;
  }, [isMainnetSupported, baseUrl]);

  const value = useMemo(
    () => ({
      config: {
        defaultChain,
        supportedChainIds,
      },
      connectors: {
        metamask,
        trust,
        imtoken,
        walletconnect,
        coinbase,
      },
    }),
    [
      coinbase,
      defaultChain,
      imtoken,
      metamask,
      supportedChainIds,
      trust,
      walletconnect,
    ],
  );

  return (
    <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
  );
};

export default memo(ConfigProvider);
