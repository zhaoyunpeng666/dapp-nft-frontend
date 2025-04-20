import { Connection, PublicKey } from '@solana/web3.js';
import { Program } from '@project-serum/anchor';
import { createConnection, initProgram } from '@/utils/solana';
import { SOLANA_NETWORK } from '@/utils/solana';

export class SolanaService {
  private connection: Connection;
  private program: Program | null = null;

  constructor() {
    this.connection = createConnection(SOLANA_NETWORK.DEVNET);
  }

  // 初始化合约程序
  async initProgram(wallet: any, programId: string, idl: any) {
    try {
      this.program = await initProgram(
        this.connection,
        wallet,
        new PublicKey(programId),
        idl
      );
      return this.program;
    } catch (error) {
      console.error('初始化合约程序失败:', error);
      throw error;
    }
  }

  // 调用合约方法
  async callContractMethod(methodName: string, ...args: any[]) {
    if (!this.program) {
      throw new Error('合约程序未初始化');
    }

    try {
      const method = this.program.methods[methodName];
      if (!method) {
        throw new Error(`方法 ${methodName} 不存在`);
      }

      const tx = await method(...args).rpc();
      return tx;
    } catch (error) {
      console.error(`调用合约方法 ${methodName} 失败:`, error);
      throw error;
    }
  }

  // 查询合约状态
  async getContractState(account: string) {
    if (!this.program) {
      throw new Error('合约程序未初始化');
    }

    try {
      const accountInfo = await this.program.account.state.fetch(
        new PublicKey(account)
      );
      return accountInfo;
    } catch (error) {
      console.error('查询合约状态失败:', error);
      throw error;
    }
  }
} 