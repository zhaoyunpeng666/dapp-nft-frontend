'use client'

import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import Image from 'next/image';
import { CATEGORY_MENU, BLOCKCHAIN_MENU, Category, Blockchain } from './constants'

interface NFTPreviewProps {
  formData: {
    name: string;
    description: string;
    categorieId: string;
    chainId: string;
    royaltyPercentage: string;
    file: File | null;
    previewUrl: string;
  };
}

export default function NFTPreview({ formData }: NFTPreviewProps) {
  return (
    <Box className="bg-stone-50 p-6">
      <Typography variant="h6" className="mb-6">NFT预览</Typography>
      <Paper 
        elevation={0}
        className="bg-gray-100 p-6 rounded-lg"
      >
        <Box className="aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
          {formData.previewUrl ? (
            formData.file?.type.startsWith('image/') ? (
              <Image
                src={formData.previewUrl}
                alt="NFT Preview"
                width={300}
                height={300}
                style={{ width: '100%', height: '100%' }}
              />
            ) : (
              <video
                src={formData.previewUrl}
                controls
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            )
          ) : (
            <Typography color="text.secondary">
              您的NFT预览将在这里显示
            </Typography>
          )}
        </Box>

        {/* NFT 信息预览 */}
        <Box className="space-y-4">
          <Box>
            <Typography variant="caption" color="text.secondary">
              名称
            </Typography>
            <Typography variant="subtitle1" className="font-medium">
              {formData.name || '-'}
            </Typography>
          </Box>

          <Box>
            <Typography variant="caption" color="text.secondary">
              描述
            </Typography>
            <Typography variant="subtitle1" className="font-medium">
              {formData.description || '-'}
            </Typography>
          </Box>

          <Box>
            <Typography variant="caption" color="text.secondary">
              类别
            </Typography>
            <Typography variant="subtitle1" className="font-medium">
              {formData.categorieId ? CATEGORY_MENU[formData.categorieId as Category] : '-'}
            </Typography>
          </Box>

          <Box>
            <Typography variant="caption" color="text.secondary">
              区块链
            </Typography>
            <Typography variant="subtitle1" className="font-medium">
              {formData.chainId ? BLOCKCHAIN_MENU[formData.chainId as Blockchain] : '-'}
            </Typography>
          </Box>

          <Box>
            <Typography variant="caption" color="text.secondary">
              版税
            </Typography>
            <Typography variant="subtitle1" className="font-medium">
              {formData.royaltyPercentage ? `${formData.royaltyPercentage}%` : '-'}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
} 