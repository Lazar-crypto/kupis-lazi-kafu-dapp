import './App.css';
import Home from './components/Home.component';

import abi from './utils/BuyMeACoffee.json';

export type abiType = typeof abi.abi;

const App = () => {
  const contractAddress = '0x56f9E4726A749290718cE98d9D85B43eb288f99C';
  const contractABI = abi.abi;

  return (
    <div className='App'>
      <Home contractAddress={contractAddress} contractABI={contractABI} />
    </div>
  );
};

export default App;
