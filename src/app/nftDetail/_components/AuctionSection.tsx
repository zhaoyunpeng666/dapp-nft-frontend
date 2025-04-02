import React from 'react';
import { Grid2 as Grid, Typography, TextField, Button, Box } from '@mui/material';
import { NFTData } from '@/@types';

const AuctionSection = ({ nftData }: {nftData: NFTData}) => {
  return (
    <Grid container spacing={2} sx={{
        bgcolor: '#f0f0ff',
        borderRadius: '8px',
        marginBottom: '30px',
        padding: '10px',
        marginTop: '10px',
    }}>
      {/* 拍卖信息 */}
      <Grid size={12}>
        <Typography variant="body2" color="green">
          英式拍卖
        </Typography>
      </Grid>

      {/* 当前出价 */}
      <Grid size={4}>
        <Typography variant="body2">当前出价</Typography>
        <Typography variant="h6">{nftData.currentBid}</Typography>
      </Grid>

      {/* 剩余时间 */}
      <Grid size={4}>
        <Typography variant="body2">剩余时间</Typography>
        <Typography variant="h6">{nftData.timeLeft}</Typography>
      </Grid>

      {/* 出价次数 */}
      <Grid size={4}>
        <Typography variant="body2">出价次数</Typography>
        <Typography variant="h6">8</Typography>
      </Grid>

      {/* 最低出价 */}
      <Grid size={12}>
        <Typography variant="caption">最低加价: {nftData.minIncrement}</Typography>
      </Grid>

      {/* 出价输入框 */}
      <Grid size={12}>
        <Box display="flex" gap={2}>
          <TextField
            id="outlined-basic"
            label="输入出价金额"
            variant="outlined"
            fullWidth
            sx={{
                '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'black',
                    color: 'black',
                },
                '& .MuiInputBase-input': {
                    color: 'black',
                    borderColor: 'black',
                    height: '16px',
                    backgroundColor: 'white',
                    // padding: '8px 14px',
                },
                '& .MuiInputBase-input::placeholder': {
                    color: 'black',
                },
                '& .MuiInputBase-input:focus': {
                    borderColor: 'black',
                    color: 'black',
                },
                '& .MuiInputBase-input:focus-visible': {
                    borderColor: 'black',
                    color: 'black',
                },
                '& .MuiInputLabel-formControl': {
                    color: 'black',
                },
                '& .MuiInputLabel-shrink': {
                    color: 'black',
                },
                '& .MuiOutlinedInput-root': {
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'black',
                    },
                },
            }}
          />
          <Button variant="contained" color="violet"
            onClick={() => {
                console.log('出价');
            }}
            >出价</Button>
        </Box>
      </Grid>

      {/* 立即购买 */}
      <Grid size={12}>
        <Button variant="contained" color="success" fullWidth 
        sx={{
            color: '#fff',
        }}
        onClick={() => {
            console.log('立即购买');
        }}
        >
          立即购买 ({nftData.buyNowPrice})
        </Button>
      </Grid>
    </Grid>
  );
};

export default AuctionSection;
