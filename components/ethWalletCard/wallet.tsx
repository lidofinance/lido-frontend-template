import { Divider } from '@lidofinance/lido-ui';
import {
  useEthereumBalance,
  useSDK,
  useSTETHBalance,
  useTokenAddress,
  useWSTETHBalance,
} from '@lido-sdk/react';
import { TOKENS } from '@lido-sdk/constants';
import { useWeb3 } from '@reef-knot/web3-react';

import FormatToken from '@common/components/formatToken';

import TokenToWallet from '@common/components/wallet/components/tokenToWallet';
import FallbackWallet from '@common/components/wallet/components/fallbackWallet';
import WalletCard from '@common/components/wallet/components/walletCard';
import WalletCardRow from '@common/components/wallet/components/walletCard/components/walletCardRow';
import WalletCardBalance from '@common/components/wallet/components/walletCardBalance';
import WalletCardAccount from '@common/components/wallet/components/walletCardAccount';
import { EthWalletCardComponent } from './types';

const EthWalletCard: EthWalletCardComponent = (props) => {
  const { account } = useSDK();
  const eth = useEthereumBalance();
  const steth = useSTETHBalance();
  const wsteth = useWSTETHBalance();

  const stethAddress = useTokenAddress(TOKENS.STETH);
  const wstethAddress = useTokenAddress(TOKENS.WSTETH);

  return (
    <WalletCard {...props}>
      <WalletCardRow>
        <WalletCardBalance
          title="Eth balance"
          loading={eth.initialLoading}
          value={<FormatToken amount={eth.data} symbol="ETH" />}
        />
        <WalletCardAccount account={account} />
      </WalletCardRow>
      <Divider />
      <WalletCardRow>
        <WalletCardBalance
          small
          title="Token balance"
          loading={steth.initialLoading}
          value={
            <>
              <FormatToken amount={steth.data} symbol="stETH" />
              <TokenToWallet address={stethAddress} />
            </>
          }
        />
        <WalletCardBalance
          small
          title="Token balance"
          loading={wsteth.initialLoading}
          value={
            <>
              <FormatToken amount={wsteth.data} symbol="wstETH" />
              <TokenToWallet address={wstethAddress} />
            </>
          }
        />
      </WalletCardRow>
    </WalletCard>
  );
};

const EthWalletCardWrapper: EthWalletCardComponent = (props) => {
  const { active } = useWeb3();
  return active ? <EthWalletCard {...props} /> : <FallbackWallet {...props} />;
};

export default EthWalletCardWrapper;
