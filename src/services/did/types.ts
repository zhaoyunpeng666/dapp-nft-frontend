import { IResponse } from '../types';

export interface AuthVerifyRequest {
  message: string;
  signature: string;
}

export interface GetAuthNonceData {
  address: string;
  message: string;
}

export interface AuthVerifyData {
  address: string;
  chain_id: number;
  message: string;
  signature: string;
}

export interface UserInfoData {
  address: string;
  name: string;
  score: string;
  isOg: boolean;
}

export type GetAuthNonceResponse = Awaited<Readonly<IResponse<GetAuthNonceData>>>;
export type UserInfoDataResponse = Awaited<Readonly<IResponse<UserInfoData>>>;
export type AuthVerifyResponse = Awaited<Readonly<IResponse<AuthVerifyData>>>;
