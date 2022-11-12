import type { MetaMaskInpageProvider } from '@metamask/providers';

const errMsg = 'Please use MetaMask for your wallet provider';

export const useMetaMask = (): MetaMaskInpageProvider => {
  const ethereum = global?.window?.ethereum;
  if (!ethereum || !ethereum.isMetaMask) throw new Error(errMsg);

  return ethereum as unknown as MetaMaskInpageProvider;
};
