import { IResponse, AuthorityResponse } from '../types';

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

export interface AuthVerifyResult {
  is_allowed: boolean;
  token: string;
}

export interface UserInfoData {
  address: string;
  name: string;
  score: string;
  isOg: boolean;
}

export type GetAuthNonceResponse = Awaited<Readonly<IResponse<GetAuthNonceData>>>;
export type UserInfoDataResponse = Awaited<Readonly<IResponse<UserInfoData>>>;
export type AuthVerifyResponse = Awaited<Readonly<AuthorityResponse<AuthVerifyResult>>>;

export type UploadFileResponse = Awaited<Readonly<{path: string; status: string}>>;


// 拍卖信息列表
export interface AuctionListParams {
  category: string;
  auction_type: string;
  chain_id: string;
  min_price: number;
  max_price: number;
  page: number;
  page_size: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AuctionListResponse = Awaited<Readonly<IResponse<{result: object[]; total: number}>>>;
