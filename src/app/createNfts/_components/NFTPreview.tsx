'use client'

import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

export default function NFTPreview() {
  return (
    <Box>
      <Typography variant="h6" className="mb-6">NFT预览</Typography>
      <Paper 
        elevation={0}
        className="bg-gray-100 p-6 rounded-lg"
      >
        <Box className="aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
          <Typography color="text.secondary">
            您的NFT预览将在这里显示
          </Typography>
        </Box>

        {/* NFT 信息预览 */}
        <Box className="space-y-4">
          <Box>
            <Typography variant="caption" color="text.secondary">
              基本信息
            </Typography>
            <Typography variant="subtitle1" className="font-medium">
              -
            </Typography>
          </Box>

          <Box>
            <Typography variant="caption" color="text.secondary">
              区块链
            </Typography>
            <Typography variant="subtitle1" className="font-medium">
              以太坊 (Ethereum)
            </Typography>
          </Box>

          <Box>
            <Typography variant="caption" color="text.secondary">
              版税
            </Typography>
            <Typography variant="subtitle1" className="font-medium">
              10%
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
} 