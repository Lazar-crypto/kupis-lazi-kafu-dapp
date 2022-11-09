import { ethers } from 'hardhat';

const main = async () => {
  const BuyMeACoffee = await ethers.getContractFactory('BuyMeACoffee');
  const buyMeACoffee = await BuyMeACoffee.deploy();

  await buyMeACoffee.deployed();
  console.log('BuyMeACoffee deployed to: ', buyMeACoffee.address);
};
