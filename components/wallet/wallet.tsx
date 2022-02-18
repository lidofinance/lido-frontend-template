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
import { WalletComponent } from './types';
import {
  useLidoMaticRPC,
  useLidoMaticWeb3,
  useMaticTokenRPC,
  useMaticTokenWeb3,
} from 'hooks';
import { useState, useEffect } from 'react';

const Wallet: WalletComponent = (props) => {
  const { account } = useSDK();

  const stMaticTokenRPC = useLidoMaticRPC();
  const stMaticTokenWeb3 = useLidoMaticWeb3();
  const maticTokenRPC = useMaticTokenRPC();
  const maticTokenWeb3 = useMaticTokenWeb3();
  const maticBalance = useContractSWR({
    contract: maticTokenRPC,
    method: 'balanceOf',
    params: [account],
  });
  const [maticSymbol, setMaticSymbol] = useState('MATIC');
  const [stMaticSymbol, setStMaticSymbol] = useState('stMATIC');
  useEffect(() => {
    if (maticTokenWeb3) {
      maticTokenWeb3.symbol().then((res) => {
        setMaticSymbol(res);
      });
    }
    if (stMaticTokenWeb3) {
      stMaticTokenWeb3.symbol().then((res) => {
        setStMaticSymbol(res);
      });
    }
  }, [maticTokenWeb3, stMaticTokenWeb3]);
  const stMaticBalance = useContractSWR({
    contract: stMaticTokenRPC,
    method: 'balanceOf',
    params: [account],
  });
  return (
    <WalletCard {...props}>
      <WalletCardRow>
        <WalletCardBalance
          title="Available to stake"
          loading={maticBalance.loading}
          value={
            <FormatToken amount={maticBalance.data} symbol={maticSymbol} />
          }
        />
        <WalletCardAccount account={account} />
      </WalletCardRow>
      <Divider />
      <WalletCardRow>
        <WalletCardBalance
          small
          title="Staked amount"
          loading={stMaticBalance.initialLoading}
          value={
            <>
              <FormatToken
                amount={stMaticBalance.data}
                symbol={stMaticSymbol}
              />
            </>
          }
        />
        {/* 
        TODO: Add after historical data can be fetched
        
        <WalletCardBalance
          small
          title="Lido APR"
          loading={maticBalance.initialLoading}
          value={
            <>
              <Text style={{ color: '#53BA95' }} size="xs">
                40%
              </Text>
            </>
          }
        /> */}
      </WalletCardRow>
    </WalletCard>
  );
};

const WalletWrapper: WalletComponent = (props) => {
  const { active } = useWeb3();
  return active ? <Wallet {...props} /> : <FallbackWallet {...props} />;
};

export default WalletWrapper;
