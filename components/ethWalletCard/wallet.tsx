import { useWeb3 } from 'reef-knot/web3-react';
import {
  useEthereumBalance,
  useSDK,
  useSTETHBalance,
  useTokenAddress,
  useWSTETHBalance,
} from '@lido-sdk/react';
import { TOKENS } from '@lido-sdk/constants';
import { Divider } from '@lidofinance/lido-ui';
import { WALLET_MODAL, useModal } from '@lidofinance/eth-ui-wallet-modal';
import {
  WalletCard,
  WalletCardRow,
  WalletCardBalance,
  WalletCardAccount,
} from '@lidofinance/ui-primitives';
import {
  FormatToken,
  TokenToWallet,
  WalletFallback,
} from '@lidofinance/eth-ui-primitives';

import { EthWalletCardComponent } from './types';

const EthWalletCard: EthWalletCardComponent = (props) => {
  const { account } = useSDK();
  const eth = useEthereumBalance();
  const steth = useSTETHBalance();
  const wsteth = useWSTETHBalance();

  const stethAddress = useTokenAddress(TOKENS.STETH);
  const wstethAddress = useTokenAddress(TOKENS.WSTETH);

  const { openModal } = useModal(WALLET_MODAL.wallet);

  return (
    <WalletCard {...props}>
      <WalletCardRow>
        <WalletCardBalance
          title="Eth balance"
          loading={eth.initialLoading}
          value={<FormatToken amount={eth.data} symbol="ETH" />}
        />
        <WalletCardAccount account={account} onClickCb={openModal} />
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
          extra={'Extra content here'}
        >
          Children content here
        </WalletCardBalance>
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
          extra={'Extra content here'}
        >
          Children content here
        </WalletCardBalance>
      </WalletCardRow>
    </WalletCard>
  );
};

const EthWalletCardWrapper: EthWalletCardComponent = (props) => {
  const { active } = useWeb3();
  return active ? <EthWalletCard {...props} /> : <WalletFallback {...props} />;
};

export default EthWalletCardWrapper;
