import { Wallet } from '@project-serum/anchor';
import { Idl } from '@project-serum/anchor';

export interface SolanaConfig {
  network: string;
  programId: string;
  idl: Idl;
}

export interface ContractState {
  // 根据你的合约状态定义相应的字段
  owner: string;
  balance: number;
  // ... 其他字段
}

export interface ContractMethod {
  name: string;
  args: any[];
}

export interface WalletAdapter {
  publicKey: string;
  signTransaction: (transaction: any) => Promise<any>;
  signAllTransactions: (transactions: any[]) => Promise<any[]>;
} 