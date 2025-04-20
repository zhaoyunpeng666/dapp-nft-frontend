import { Connection, PublicKey, Keypair, Transaction, SystemProgram, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { Program, AnchorProvider, Wallet } from '@project-serum/anchor';
import { useWallet } from '@solana/wallet-adapter-react';

// Solana网络配置
export const SOLANA_NETWORK = {
  MAINNET: 'https://api.mainnet-beta.solana.com',
  DEVNET: 'https://api.devnet.solana.com',
  TESTNET: 'https://api.testnet.solana.com'
};

// 创建Solana连接
export const createConnection = (network: string = SOLANA_NETWORK.DEVNET) => {
  return new Connection(network, 'confirmed');
};

// 获取钱包余额
export const getBalance = async (connection: Connection, publicKey: PublicKey) => {
  try {
    const balance = await connection.getBalance(publicKey);
    return balance / LAMPORTS_PER_SOL;
  } catch (error) {
    console.error('获取余额失败:', error);
    throw error;
  }
};

// 创建交易
export const createTransaction = async (
  connection: Connection,
  fromPubkey: PublicKey,
  toPubkey: PublicKey,
  amount: number
) => {
  try {
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey,
        toPubkey,
        lamports: amount * LAMPORTS_PER_SOL
      })
    );
    
    return transaction;
  } catch (error) {
    console.error('创建交易失败:', error);
    throw error;
  }
};

// 初始化Anchor程序
export const initProgram = async (
  connection: Connection,
  wallet: Wallet,
  programId: PublicKey,
  idl: any
) => {
  try {
    const provider = new AnchorProvider(connection, wallet, {});
    return new Program(idl, programId, provider);
  } catch (error) {
    console.error('初始化程序失败:', error);
    throw error;
  }
}; 