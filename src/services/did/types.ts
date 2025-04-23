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

// 保存NFT信息
export interface SaveNFTInfoData {
  name: string;
  description: string;
  imageUrl: string;
  royaltyPercentage: string;
  chainId: number;
  categorieId: string;
}

export type SaveNFTInfoResponse = Awaited<Readonly<IResponse<{result: boolean}>>>;

// 拍卖信息列表
export interface AuctionListParams {
  filters: {
    category?: string;
    auction_type?: string[];
    chain_id?: number[];
    min_price?: number;
    max_price?: number;
    order_by?: string;
    page?: number;
    page_size?: number;
  }
}

export interface NFTItem {
  nft_id: number;
  nft_name: string;
  nft_creator: string;
  current_price: number;
  auction_type: string;
  auction_id: number;
  category: string;
  chain_id: number;
  currency_symbol: string;
  end_time: string;
  status: string;
  created_at: string;
  image: string;
}

export type AuctionListResponse = Awaited<Readonly<IResponse<{result: NFTItem[]; count: number}>>>;

// 拍卖详情
export interface AuctionDetailParams {
  filters: {
    auction_id: number;
    chain_id: number;
    token_id: string;
    contract_address: string;
  }
}

export type nft_attributes = {
  attribute_id: number,
  token_id: string,
  trait_type: string,
  trait_value: string,
  display_type: string,
  rarity_percentage: number,
  created_at: string
}

export type auction_bids = {
  bid_id: number,
  auction_id: number,
  bidder: string,
  bid_amount: number,
  transaction_hash: string,
  status: string,
  created_at: string,
  updated_at: string,
}

export interface AuctionDetailData {
  bid_count: number;
  winner: string;
  description: string;
  image_url: string;
  metadata_url: string;
  owner_id: string;
  royalty_percentage: string;
  token_standard: string;
  minted_at: string;
  nft_status: string;
  nft_attributes: nft_attributes[];
  auction_bids: auction_bids[]
}


export type AuctionDetailResponse = Awaited<Readonly<IResponse<{result: AuctionDetailData}>>>;