'use client'

import React, { useState } from 'react';
import { Container, Typography, Box, Grid2 as Grid } from '@mui/material';
import NFTForm from './_components/NFTForm';
import NFTPreview from './_components/NFTPreview';
import MintSteps from './_components/MintSteps';
import { Category, Blockchain } from './_components/constants';

export default function CreateNFTPage() {
  const [formData, setFormData] = useState({
    previewUrl: '',
    imageUrl: '',
    name: '',
    description: '',
    categorieId: Category.ART,
    chainId: Blockchain.ETHEREUM,
    royaltyPercentage: '10',
    file: null as File | null,
  });

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
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 7 }}>
            <NFTForm formData={formData} setFormData={setFormData} />
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <NFTPreview formData={formData} />
          </Grid>
        </Grid>

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