'use client'

import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import NFTForm from './_components/NFTForm';
import NFTPreview from './_components/NFTPreview';
import MintSteps from './_components/MintSteps';

export default function CreateNFTPage() {
  return (
    <Box>
      {/* 页面标题 */}
      <Box className="flex flex-col items-center justify-center py-10 bg-black"
        sx={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
        }}
      >
          <Typography variant="h4" className="text-center font-bold text-white"
          >铸造您的NFT</Typography>
          <Typography variant="h6" className="text-center font-bold text-white pt-2"
          >将您的艺术作品转化为区块链上的非同质化代币，开启您的NFT之旅。</Typography>
      </Box>
      <Container maxWidth="lg" className="py-8">
        {/* 主要内容区域 */}
        <Box className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <NFTForm />
          <NFTPreview />
        </Box>

        {/* 铸造流程 */}
        <Box className="mt-16">
          <Typography variant="h5" component="h2" className="text-center mb-8">
            铸造流程
          </Typography>
          <Typography variant="body1" color="text.secondary" className="text-center mb-8">
            了解NFT铸造的完整流程，从创建到上架过程。
          </Typography>
          <MintSteps />
        </Box>
    </Container>
    </Box>
  );
} 