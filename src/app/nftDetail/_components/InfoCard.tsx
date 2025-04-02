import React from 'react';
import { Grid2 as Grid, Typography } from '@mui/material';
import { NFTData } from '@/@types';

const InfoCard = ({ nftData }: {nftData: NFTData}) => {
  return (
    <Grid container spacing={2}>
        <Typography variant="h5">
          {nftData.title}
        </Typography>
        <Grid size={12}>
        <Typography variant="caption" gutterBottom >
          Token ID: {nftData.tokenID}
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
                    <Typography variant="body2">{nftData.blockchain}</Typography>
                </Grid>
                <Grid size={6} sx={{
                    bgcolor: '#f9f9f9',
                    borderRadius: '8px',
                    padding: '10px',
                }}>
                    <Typography variant="body2">合约地址</Typography>
                    <Typography variant="body2">{nftData.contractAddress}</Typography>
                </Grid>
                <Grid size={6} sx={{
                    bgcolor: '#f9f9f9',
                    borderRadius: '8px',
                    padding: '10px',
                }}>
                    <Typography variant="body2">创建时间</Typography>
                    <Typography variant="body2">{nftData.createdAt}</Typography>
                </Grid>
                <Grid size={6} sx={{
                    bgcolor: '#f9f9f9',
                    borderRadius: '8px',
                    padding: '10px',
                }}>
                    <Typography variant="body2">文件格式</Typography>
                    <Typography variant="body2">{nftData.fileFormat}</Typography>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
  );
};

export default InfoCard;
