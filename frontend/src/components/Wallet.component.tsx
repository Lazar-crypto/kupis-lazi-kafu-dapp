import { useEffect } from 'react';
import { useMetaMask } from '../hooks/useMetaMask';
import { MetaMaskInpageProvider } from '@metamask/providers';

type WalletProps = {
  currentAccount: string;
  onAccountChangedHandler: (newAccount: unknown) => void;
};

const Wallet = ({ currentAccount, onAccountChangedHandler }: WalletProps) => {
  const ethereum = useMetaMask();

  ethereum.on('accountsChanged', onAccountChangedHandler);

  useEffect(() => {
    try {
      connectWallet(ethereum);
    } catch (error) {
      alert(error);
    }
  });

  const connectWallet = async (
    ethereum: MetaMaskInpageProvider
  ): Promise<void> => {
    const accounts = await ethereum.request({
      method: 'eth_requestAccounts',
    });

    if (accounts && Array.isArray(accounts))
      onAccountChangedHandler(accounts[0]);
  };

  return (
    <div className='wallet'>
      <h1>Connect your wallet</h1>
      <div>{currentAccount}</div>
    </div>
  );
};

export default Wallet;
