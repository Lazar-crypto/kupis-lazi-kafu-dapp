import { abiType } from '../App';
import { useState } from 'react';
import Wallet from './Wallet.component';

type HomeProps = {
  contractAddress: string;
  contractABI: abiType;
};

const Home = ({ contractAddress, contractABI }: HomeProps) => {
  const [currentAccount, setCurrentAccount] = useState('');

  const accountChangedHandler = async (newAccount: unknown): Promise<void> => {
    setCurrentAccount(newAccount as string);
  };

  return (
    <div className='home'>
      <Wallet
        currentAccount={currentAccount}
        onAccountChangedHandler={accountChangedHandler}
      />
    </div>
  );
};

export default Home;
