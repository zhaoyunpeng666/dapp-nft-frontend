'use client'

import React from 'react';
import { Typography, Button, Theme } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import { NFTData } from '@/@types';

const MediaSection = ({ nftData }: {nftData: NFTData}) => {
  return (
    <Grid container spacing={2}>
      {/* 主图 */}
      <Grid size={12}>
        <Typography variant="h5" gutterBottom>
          {nftData.title}
        </Typography>
        <Image
          src="https://via.placeholder.com/300"
          width={300}
          height={256}
          alt="缩略图"
          className="w-full h-64 object-cover rounded-lg"
        />
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
              {nftData.author}
            </Typography>
            <Typography variant="caption">
              {`${nftData.verified ? "已验证" : ""} - ${
                nftData.nftsCount
              } NFT - ${nftData.followers} 粉丝`}
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
