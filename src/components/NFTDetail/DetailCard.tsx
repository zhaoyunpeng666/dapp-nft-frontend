'use client'

import React from "react";
import { Box, Typography, Divider, Button } from "@mui/material";

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

const DetailCard: React.FC = () => {
  return (
    <Box className="p-4 rounded-lg shadow-md">
      <InfoRow title="合约地址"
        content={
            <Button variant="text" color="violet" sx={{
                padding: 0,
            }}>0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t</Button>
        }/>
      <Divider className="my-2 bg-gray-200" />
      <InfoRow title="Token ID" content="42" />
      <Divider className="my-2 bg-gray-200" />
      <InfoRow title="Token 标准" content="ERC-721" />
      <Divider className="my-2 bg-gray-200" />
      <InfoRow title="区块链" content="以太坊" />
      <Divider className="my-2 bg-gray-200" />
      <InfoRow title="创作者版税" content="10%" />
      <Divider className="my-2 bg-gray-200" />
      <InfoRow title="创建时间" content="2025-02-15 14:30:45" />
      <Divider className="my-2 bg-gray-200" />
      <InfoRow title="最后更新" content="2025-03-20 09:15:22" />
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
            }}>NFTGallery</Button>
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
