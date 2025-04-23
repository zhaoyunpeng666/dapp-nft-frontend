'use client'

import React from 'react';
import { Grid2 as Grid, Typography } from '@mui/material';
import { AuctionDetailData } from '@/services/did/types';

const InfoCard = ({ nftData }: {nftData: AuctionDetailData}) => {
  return (
    <Grid container spacing={2}>
        <Typography variant="h5">
          {nftData.description}
        </Typography>
        <Grid size={12}>
        <Typography variant="caption" gutterBottom >
          Token ID: {nftData.nft_attributes[0].token_id}
        </Typography>
        </Grid>

        {/* 描述 */}
        <Grid size={12}>
            <Typography variant="body1">
            {nftData.description}
            </Typography>
        </Grid>

        {/* 详细信息 */}
        <Grid size={12}>
            <Grid container spacing={2}>
                <Grid size={6} sx={{
                    bgcolor: '#f9f9f9',
                    borderRadius: '8px',
                    padding: '10px',
                }}>
                    <Typography variant="body2">区块链</Typography>
                    <Typography variant="body2">{nftData.auction_bids[0].auction_id}</Typography>
                </Grid>
                <Grid size={6} sx={{
                    bgcolor: '#f9f9f9',
                    borderRadius: '8px',
                    padding: '10px',
                }}>
                    <Typography variant="body2">合约地址</Typography>
                    <Typography variant="body2">{nftData.owner_id}</Typography>
                </Grid>
                <Grid size={6} sx={{
                    bgcolor: '#f9f9f9',
                    borderRadius: '8px',
                    padding: '10px',
                }}>
                    <Typography variant="body2">创建时间</Typography>
                    <Typography variant="body2">{nftData.minted_at}</Typography>
                </Grid>
                <Grid size={6} sx={{
                    bgcolor: '#f9f9f9',
                    borderRadius: '8px',
                    padding: '10px',
                }}>
                    <Typography variant="body2">文件格式</Typography>
                    <Typography variant="body2">{nftData.token_standard}</Typography>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
  );
};

export default InfoCard;
