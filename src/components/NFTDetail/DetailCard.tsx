'use client'

import React from "react";
import { Box, Typography, Divider, Button } from "@mui/material";
import { AuctionDetailData } from '@/services/did/types';
import { useSearchParams } from 'next/navigation';

interface InfoRowProps {
  title: string;
  content: React.ReactNode;
}

const InfoRow: React.FC<InfoRowProps> = ({ title, content }) => (
  <div className="flex justify-between my-2">
    <Typography variant="body2" className="font-bold text-gray-500">
      {title}
    </Typography>
    <Typography variant="body2" >
      {content}
    </Typography>
  </div>
);

const DetailCard = ({ nftData }: {nftData: AuctionDetailData}) => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id')

  return (
    <Box className="p-4 rounded-lg shadow-md">
      <InfoRow title="合约地址"
        content={
            <Button variant="text" color="violet" sx={{
                padding: 0,
            }}>{nftData.owner_id}</Button>
        }/>
      <Divider className="my-2 bg-gray-200" />
      <InfoRow title="Token ID" content={id} />
      <Divider className="my-2 bg-gray-200" />
      <InfoRow title="Token 标准" content={nftData.token_standard} />
      <Divider className="my-2 bg-gray-200" />
      <InfoRow title="区块链" content="以太坊" />
      <Divider className="my-2 bg-gray-200" />
      <InfoRow title="创作者版税" content="10%" />
      <Divider className="my-2 bg-gray-200" />
      <InfoRow title="创建时间" content={nftData.minted_at} />
      <Divider className="my-2 bg-gray-200" />
      <InfoRow title="最后更新" content={nftData.minted_at} />
      <Divider className="my-2 bg-gray-200" />
      <InfoRow title="创作者" content={
        <Button variant="text" color="violet" sx={{
            padding: 0,
        }}>CryptoArtist</Button>
      } />
      <Divider className="my-2 bg-gray-200" />
      <InfoRow title="当前拥有者"
        content={
            <Button variant="text" color="violet" sx={{
                padding: 0,
            }}>{nftData.winner}</Button>
        }
      />
      <Divider className="my-2 bg-gray-200" />
      <InfoRow title="元数据" content={
        <Button variant="text" color="violet" sx={{
            padding: 0,
        }}>查看原始数据</Button>
      } />
    </Box>
  );
};

export default DetailCard;
