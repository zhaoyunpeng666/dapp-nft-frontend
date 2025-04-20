import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import { http, createConfig } from 'wagmi';
import type { Chain } from 'wagmi/chains';
import {
    rainbowWallet,
    walletConnectWallet,
    injectedWallet,
    metaMaskWallet,
    okxWallet,
    wigwamWallet,
    coinbaseWallet,
    phantomWallet,
  } from '@rainbow-me/rainbowkit/wallets';
import { mainnet, polygon, sepolia } from 'wagmi/chains';

// 自定义Solana devnet链
export const devnet: Chain = {
  id: 9_999_999,
  name: 'Solana Devnet',
  nativeCurrency: {
    name: 'SOL',
    symbol: 'SOL',
    decimals: 9,
  },
  rpcUrls: {
    default: { http: ['https://api.devnet.solana.com'] },
    public: { http: ['https://api.devnet.solana.com'] },
  },
  blockExplorers: {
    default: { name: 'Solana Explorer', url: 'https://explorer.solana.com/?cluster=devnet' },
  },
  testnet: true,
};

const ProjectId = 'f5922a589d1cdb1511340f44b9b9a442'
export const INFURA_MAINNET_URL = 'https://mainnet.infura.io/v3/96aa198cd9e84cda8aeb29b4009bcc27';
export const INFURA_SEPOLIA_URL = 'https://sepolia.infura.io/v3/96aa198cd9e84cda8aeb29b4009bcc27';
export const INFURA_POLYGON_URL = 'https://polygon-mainnet.infura.io/v3/96aa198cd9e84cda8aeb29b4009bcc27';

const connectors = connectorsForWallets(
    [
      {
        groupName: 'Recommended',
        wallets: [
          rainbowWallet, 
          phantomWallet,
          injectedWallet,
          metaMaskWallet,
          okxWallet,
          wigwamWallet,
          coinbaseWallet,
          walletConnectWallet,
        ],
      },
      {
        groupName: 'Others',
        wallets: [coinbaseWallet, walletConnectWallet],
      },
    ],
    {
      appName: 'Dapp',
      projectId: ProjectId,
    },
  );

export const config = createConfig({
    connectors,
    chains: [
        mainnet,
        sepolia,
        polygon,
        devnet,
    ],
    transports: {
        [mainnet.id]: http(INFURA_MAINNET_URL),
        [sepolia.id]: http(INFURA_SEPOLIA_URL),
        [polygon.id]: http(INFURA_POLYGON_URL),
        [devnet.id]: http('https://api.devnet.solana.com'),
    },
    ssr: true,
});
