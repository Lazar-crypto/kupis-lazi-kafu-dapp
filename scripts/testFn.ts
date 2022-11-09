import { ethers } from 'hardhat';
import { IBuyMeACoffe } from '../typechain-types/BuyMeACoffee';

// return the ether balance of the given address
export const getBalnace = async (address: string) => {
  const balance = await ethers.provider.getBalance(address);
  return ethers.utils.formatEther(balance);
};

// log the ether balances of the given addreses
export const printBalances = async (addreses: string[]) => {
  for (const address of addreses)
    console.log(
      `Address: ${address} has balance of `,
      await getBalnace(address)
    );
};

// log all the memos stored on chain from coffee purchases
export const printMemos = async (memos: IBuyMeACoffe.MemoStructOutput[]) => {
  for (const memo of memos)
    console.log(`At ${memo.timestamp}, ${memo.name} said: ${memo.message}`);
};
