import { ethers } from 'hardhat';

import { Memo } from './types';

// return the ether balance of the given address
export const getBalnace = async (address: string) => {
  const balance = await ethers.provider.getBalance(address);
  return ethers.utils.formatEther(balance);
};

// log the ether balances of the given addreses
const printBalances = async (addreses: string[]) => {
  for (const address of addreses)
    console.log(
      `Address: ${address} has balance of `,
      await getBalnace(address)
    );
};

// log all the memos stored on chain from coffee purchases
const printMemos = async (memos: Memo[]) => {
  for (const memo of memos)
    console.log(
      `At ${ethers.utils.formatEther(memo.timestamp)}, ${memo.name} said: ${
        memo.message
      }`
    );
};
