import {
  WalletCard,
  WalletCardBalance,
  WalletCardRow,
  WalletCardAccount,
} from 'components/walletCard';
import { Divider } from '@lidofinance/lido-ui';
import {
  useEthereumBalance,
  useSDK,
  useSTETHBalance,
  useTokenAddress,
  useWSTETHBalance,
} from '@lido-sdk/react';
import { useWeb3 } from '@reef-knot/web3-react';
import FormatToken from 'components/formatToken';
import FallbackWallet from 'components/fallbackWallet';
import TokenToWallet from 'components/tokenToWallet';
import { WalletComponent } from './types';
import { TOKENS } from '@lido-sdk/constants';

const Wallet: WalletComponent = (props) => {
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

const WalletWrapper: WalletComponent = (props) => {
  const { active } = useWeb3();
  return active ? <Wallet {...props} /> : <FallbackWallet {...props} />;
};

export default WalletWrapper;
