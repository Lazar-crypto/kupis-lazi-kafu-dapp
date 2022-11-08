import { ethers } from 'hardhat';
import { printBalances, printMemos } from './buyMeACoffee';

const main = async () => {
  const [owner, tipper1, tipper2] = await ethers.getSigners();
  const BuyMeACoffee = await ethers.getContractFactory('BuyMeACoffee');
  const buyMeACoffee = await BuyMeACoffee.deploy();

  await buyMeACoffee.deployed();
  console.log('BuyMeACoffee deployed to: ', buyMeACoffee.address);

  //check balances before coffe purchase
  const addreses = [owner.address, tipper1.address, buyMeACoffee.address];
  await printBalances(addreses);

  const tip = { value: ethers.utils.parseEther('1') };

  await buyMeACoffee
    .connect(tipper1)
    .buyMeACoffe('Srecko', 'Evo ti jedan kafucino', tip);
  await buyMeACoffee
    .connect(tipper2)
    .buyMeACoffe('Rodja', 'Moze jedan viskac', tip);

  //check balances after coffe purchase
  await printBalances(addreses);

  //check balances and memos after withdrawing tips
  await buyMeACoffee.connect(owner).withdrawTips();
  await printBalances(addreses);
  const memos = await buyMeACoffee.connect(owner).getMemos();
  await printMemos(memos);
};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);

  process.exitCode = 1;
});
