'use client'

import React, { useState, useEffect } from 'react';
import { Typography, Button, Theme } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import { AuctionDetailData } from '@/services/did/types';
import services from '@/services';

const MediaSection = ({ nftData }: {nftData: AuctionDetailData}) => {
  const [nftImage, setNftImage] = useState<string>();

  const fetchNftImage = async (imageUrl: string) => {
    console.log('ZYP-dev 📍 MediaSection.tsx 📍 fetchNftImage 📍 imageUrl:', imageUrl);
    try {
      const response = await services.did.getFile(`./${imageUrl}`);
      // console.log('ZYP-dev 📍 MediaSection.tsx 📍 fetchNftImage 📍 response:', response);
      console.log('ZYP-dev 📍 MediaSection.tsx 📍 fetchNftImage 📍 response type:', typeof response);
      const uint8Array = new Uint8Array(response.length);
      for (let i = 0; i < response.length; i++) {
        uint8Array[i] = response.charCodeAt(i);
      }
       // 生成 Blob 和临时 URL
      const blob = new Blob([uint8Array], { type: 'image/png' });
      const imgUrl = URL.createObjectURL(blob);
      console.log('ZYP-dev 📍 MediaSection.tsx 📍 fetchNftImage 📍 imgUrl:', imgUrl);
      // 方法1：如果返回的是Blob对象
      // const blob = await response.split(',')[1];
      // const objectUrl = URL.createObjectURL(blob);
      // console.log('ZYP-dev 📍 MediaSection.tsx 📍 fetchNftImage 📍 objectUrl:', objectUrl);
      setNftImage(imgUrl);
    } catch (error) {
      console.error('获取图片失败:', error);
    }
  };
  
  useEffect(() => {
    if (nftData.image_url) {
      fetchNftImage(nftData.image_url)
    }
  }, [nftData.image_url]);

  return (
    <Grid container spacing={2}>
      {/* 主图 */}
      <Grid size={12}>
        <Typography variant="h5" gutterBottom>
          {nftData.description} {nftImage}
        </Typography>
        {
          nftImage ? (
            <Image
              src={nftImage}
              width={300}
              height={256}
              alt="缩略图"
              className="w-full h-64 object-cover rounded-lg"
              crossOrigin="anonymous"
            />
          ) : (
            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
            加载中...
          </div>
          )
        }
        
      </Grid>

      {/* 缩略图 */}
      <Grid size={3}>
        <Image
          src="https://via.placeholder.com/150"
          width={150}
          height={96}
          alt="缩略图 1"
          className="w-full h-24 object-cover rounded-lg mb-2"
        />
      </Grid>
      <Grid size={3}>
        <Image
          src="https://via.placeholder.com/150"
          width={150}
          height={96}
          alt="缩略图 2"
          className="w-full h-24 object-cover rounded-lg mb-2"
        />
      </Grid>
      <Grid size={3}>
        <Image
          src="https://via.placeholder.com/150"
          width={150}
          height={96}
          alt="缩略图 3"
          className="w-full h-24 object-cover rounded-lg mb-2"
        />
      </Grid>
      <Grid size={3}>
        <Image
          src="https://via.placeholder.com/150"
          width={150}
          height={96}
          alt="缩略图 4"
          className="w-full h-24 object-cover rounded-lg mb-2"
        />
      </Grid>
      
      {/* 创作者信息 */}
      <Grid size={12}>
        <Grid container spacing={1}>
          <Grid size={2}>
            <Image
              src="https://via.placeholder.com/150"
              width={100}
              height={96}
              alt="创作者头像"
            />
          </Grid>
          <Grid size={6}>
            <Typography variant="body1">
              {nftData.winner}
            </Typography>
            <Typography variant="caption">
              {`${nftData.nft_status === 'active' ? "已验证" : ""} - ${
                nftData.bid_count
              } NFT - ${nftData.bid_count} 粉丝`}
            </Typography>
          </Grid>
          <Grid size={4} textAlign="right">
            <Button variant="outlined" size="small" sx={{
              color: (theme: Theme) => theme.palette.violet.main,
              borderColor: (theme: Theme) => theme.palette.violet.main,
            }}>
              关注
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MediaSection;
