import {
  WalletCard,
  WalletCardBalance,
  WalletCardRow,
  WalletCardAccount,
} from 'components/walletCard';
import { Divider } from '@lidofinance/lido-ui';
import { useContractSWR, useSDK } from '@lido-sdk/react';
import { useWeb3 } from '@lido-sdk/web3-react';
import FormatToken from 'components/formatToken';
import FallbackWallet from 'components/fallbackWallet';
import TokenToWallet from 'components/tokenToWallet';
import { WalletComponent } from './types';
import { useLidoMaticRPC, useMaticTokenRPC } from 'hooks';
import { getSTMaticAddress } from 'config';

const Wallet: WalletComponent = (props) => {
  const { account, chainId } = useSDK();

  const stMaticTokenRPC = useLidoMaticRPC();
  const maticTokenRPC = useMaticTokenRPC();
  const ethBalance = useContractSWR({
    contract: maticTokenRPC,
    method: 'balanceOf',
    params: [account],
  });
  const maticBalance = useContractSWR({
    contract: stMaticTokenRPC,
    method: 'getUserBalanceInMATIC',
    params: [account],
  });
  const stMaticBalance = useContractSWR({
    contract: stMaticTokenRPC,
    method: 'balanceOf',
    params: [account],
  });

  return (
    <WalletCard {...props}>
      <WalletCardRow>
        <WalletCardBalance
          title="MAT balance"
          loading={maticBalance.initialLoading}
          value={<FormatToken amount={maticBalance.data} symbol="MAT" />}
        />
        <WalletCardAccount account={account} />
      </WalletCardRow>
      <Divider />
      <WalletCardRow>
        <WalletCardBalance
          small
          title="Token balance"
          loading={stMaticBalance.initialLoading}
          value={
            <>
              <FormatToken amount={stMaticBalance.data} symbol="stMAT" />
              <TokenToWallet address={getSTMaticAddress(chainId)} />
            </>
          }
        />
        <WalletCardBalance
          small
          title="Token balance"
          loading={ethBalance.initialLoading}
          value={
            <>
              <FormatToken amount={ethBalance.data} symbol="Testv4" />
              {/* <TokenToWallet address={wstethAddress} /> */}
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
