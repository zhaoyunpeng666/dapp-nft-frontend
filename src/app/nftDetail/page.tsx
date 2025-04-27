'use client'

import React, { useState, useEffect } from 'react';
import MediaSection from './_components/MediaSection';
import InfoCard from './_components/InfoCard';
import AuctionSection from './_components/AuctionSection';
import ActionButtons from './_components/ActionButtons';
import { useSearchParams } from 'next/navigation';
import { Box } from '@mui/material';
import NFTDetailTable from '@/components/NFTDetail';
import services from "@/services";
import { AuctionDetailParams, AuctionDetailResponse } from "@/services/did/types";
import { NFTAuctionAbiAddress } from '@/constants/abis';

const NFTDetail = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id')
  const [nftData, setNftData] = useState<AuctionDetailResponse['data']['result'] | null>(null);

  const fetchNFTDetail = async (auctionParams: AuctionDetailParams) => {
    const nftDetail = await services.did.getAuctionDetail(auctionParams);
    console.log('ZYP-dev 📍 page.tsx 📍 fetchNFTDetail 📍 nftDetail:', nftDetail);
    setNftData(nftDetail.data.result);
  }

  useEffect(() => {
    if (id) {
      const auctionParams: AuctionDetailParams = {
        filters: {
          auction_id: 1,
          token_id: '111',
          chain_id: 11155111,
          contract_address: NFTAuctionAbiAddress,
        }
      }
      fetchNFTDetail(auctionParams)
    }
  }, [id])

  // const nftData = {
  //   title: "宇宙探索者 #42",
  //   tokenID: "0x8f7d3b4c5a6e7f8d9c0b1a2e3f4d5e6f7",
  //   description: "这是一幅描绘宇宙探索的数字艺术作品，展现了未来太空旅行的壮丽景象。作品融合了科幻元素和艺术想象，创造出独特的视觉体验。每一个细节都经过精心设计，以呈现宇宙的神秘与壮丽。",
  //   author: "CryptoArtist",
  //   verified: true,
  //   nftsCount: 42,
  //   followers: 1200,
  //   blockchain: "以太坊",
  //   contractAddress: "0x1a2...3ef",
  //   createdAt: "2025-02-15",
  //   fileFormat: "PNG, 3D Model",
  //   currentBid: "2.5 ETH",
  //   timeLeft: "12:45:30",
  //   minIncrement: "0.1 ETH",
  //   buyNowPrice: "5.0 ETH",
  // };

  //   确保在使用id之前进行空值检查
  if (!id) {
    return <Box>未找到 NFT ID</Box>;
  }

  // 如果数据还未加载，显示加载中
  if (!nftData) {
    return <Box>加载中...</Box>;
  }

  return (
    <Box>
        <Box className="container mx-auto p-4 max-w-5xl grid grid-cols-3 gap-4">
            {/* 左侧媒体部分 */}
            <Box className="col-span-1 bg-white rounded-lg p-4 shadow-md">
                <MediaSection nftData={nftData} />
            </Box>

            {/* 右侧信息部分 */}
            <Box className="col-span-2">
                <Box className="bg-white rounded-lg p-4 shadow-md">
                    <InfoCard nftData={nftData} />
                    <AuctionSection nftData={nftData} />
                    <ActionButtons />
                </Box>
            </Box>
        </Box>
        <Box className="container mx-auto p-4 max-w-5xl">
            <Box className="bg-white rounded-lg p-4 shadow-md">
                <NFTDetailTable nftData={nftData} />
            </Box>
        </Box>
    </Box>
  );
};

export default NFTDetail;
