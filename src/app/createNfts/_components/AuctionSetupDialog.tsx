'use client'

import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Card,
  CardContent,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  FormHelperText,
  Grid2 as Grid,
  CircularProgress
} from '@mui/material';
import { AuctionType, AUCTION_TYPE_MENU, AUCTION_DURATION_OPTIONS } from './AuctionConstants';
import { useWriteContract, usePublicClient } from 'wagmi';
import { PublicClient, Address } from 'viem';
import { toast } from "react-toastify";
import { AuctionAbi, AuctionAbiAddress } from '@/constants/abis';
import { useRouter } from 'next/navigation';

interface AuctionSetupDialogProps {
  open: boolean;
  onClose: () => void;
  tokenId: Address | null;
}

const AuctionSetupDialog: React.FC<AuctionSetupDialogProps> = ({ open, onClose, tokenId }) => {
  const [auctionType, setAuctionType] = useState<AuctionType>(AuctionType.ENGLISH);
  const [reservePrice, setReservePrice] = useState<string>('0.1');
  const [duration, setDuration] = useState<number>(7);
  const [errors, setErrors] = useState<{ reservePrice?: string }>({});
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();
  const publicClient = usePublicClient() as PublicClient;
  const { writeContractAsync } = useWriteContract();

  // 处理拍卖类型变更
  const handleAuctionTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuctionType(Number(event.target.value) as AuctionType);
  };

  // 处理起拍价变更
  const handleReservePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setReservePrice(value);
    
    if (Number(value) <= 0) {
      setErrors({...errors, reservePrice: '起拍价必须大于0'});
    } else {
      setErrors({...errors, reservePrice: undefined});
    }
  };

  // 处理拍卖持续时间变更
  const handleDurationChange = (event: SelectChangeEvent<number>) => {
    setDuration(event.target.value as number);
  };

  // 创建拍卖
  const handleCreateAuction = async () => {
    if (!tokenId) {
      toast.error('缺少NFT Token ID');
      return;
    }

    if (Number(reservePrice) <= 0) {
      setErrors({...errors, reservePrice: '起拍价必须大于0'});
      return;
    }

    try {
      setLoading(true);
      // 将以太坊转换为wei (1 ETH = 10^18 wei)
      const reservePriceWei = BigInt(Math.floor(Number(reservePrice) * 10**18));
      console.log('ZYP-dev 📍 AuctionSetupDialog.tsx 📍 handleCreateAuction 📍 BigInt(tokenId):', BigInt(tokenId));
      console.log('ZYP-dev 📍 AuctionSetupDialog.tsx 📍 handleCreateAuction 📍 reservePriceWei:', reservePriceWei);
      // 将天数转换为秒
      const durationSeconds = BigInt(duration * 24 * 60 * 60);
      console.log('ZYP-dev 📍 AuctionSetupDialog.tsx 📍 handleCreateAuction 📍 durationSeconds:', durationSeconds);
      console.log('ZYP-dev 📍 AuctionSetupDialog.tsx 📍 handleCreateAuction 📍 auctionType:', auctionType);
      console.log('ZYP-dev 📍 AuctionSetupDialog.tsx 📍 handleCreateAuction 📍 auctionType type:', typeof auctionType);

      // 调用合约创建拍卖
      const hash = await writeContractAsync({
        abi: AuctionAbi,
        address: AuctionAbiAddress,
        functionName: 'createAuction',
        args: [
          BigInt(tokenId),
          reservePriceWei,
          durationSeconds,
          auctionType
        ],
      });

      if (!hash) {
        toast.error('创建拍卖失败');
        setLoading(false);
        return;
      }

      try {
        // 等待交易确认
        const receipt = await publicClient.waitForTransactionReceipt({ hash });
        console.log('ZYP-dev 📍 AuctionSetupDialog.tsx 📍 handleCreateAuction 📍 receipt:', receipt);

        if(receipt.status !== 'success') {
          toast.error('创建拍卖失败');
          return
        }
        toast.success('创建拍卖成功');
      } catch (error) {
        console.error('等待交易确认出错:', error);
        toast.error('创建拍卖失败');
        return
      }
      
      // 关闭弹框
      onClose();
      
      // 跳转到拍卖市场页面
      router.push('/marketplace');
    } catch (error) {
      console.error('创建拍卖出错:', error);
      toast.error('创建拍卖失败');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={loading ? undefined : onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: '8px',
          bgcolor: 'background.paper',
        }
      }}
    >
      <DialogTitle sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)', pb: 2 }}>
        <Typography variant="h5" component="div" fontWeight="bold">设置拍卖</Typography>
      </DialogTitle>
      
      <DialogContent sx={{ pt: 3, pb: 2 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>选择拍卖类型</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            选择最适合您NFT的拍卖方式
          </Typography>
          
          <RadioGroup
            value={auctionType}
            onChange={handleAuctionTypeChange}
          >
            <Grid container spacing={2}>
              {Object.entries(AUCTION_TYPE_MENU).map(([key, { title, description, icon }]) => (
                <Grid size={{xs: 12, sm: 6}} xs={12} sm={6} key={key}>
                  <Card
                    sx={{
                      cursor: 'pointer',
                      height: '100%',
                      border: Number(key) === auctionType ? '2px solid #6c63ff' : '1px solid rgba(0, 0, 0, 0.12)',
                      transition: 'all 0.3s',
                      '&:hover': { 
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        borderColor: '#6c63ff'
                      },
                    }}
                    onClick={() => setAuctionType(Number(key) as AuctionType)}
                  >
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <FormControlLabel
                          value={Number(key)}
                          control={<Radio />}
                          disabled={title !== '英式拍卖'}
                          label=""
                          sx={{ m: 0, mr: 1 }}
                        />
                        <Typography variant="h6">{title}</Typography>
                        <Box sx={{ ml: 1, fontSize: '1.5rem' }}>{icon}</Box>
                      </Box>
                      <Typography variant="body2" color="text.secondary">{description}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </RadioGroup>
        </Box>
        
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>设置拍卖参数</Typography>
          
          <Grid container spacing={3}>
            <Grid size={{xs: 12, sm: 6}}>
              <TextField
                fullWidth
                label="起拍价 (ETH)"
                type="number"
                value={reservePrice}
                onChange={handleReservePriceChange}
                error={!!errors.reservePrice}
                helperText={errors.reservePrice}
                InputProps={{
                  inputProps: {
                    min: 0.001,
                    step: 0.001
                  }
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                      borderColor: 'primary.main',
                    },
                  },
                }}
              />
            </Grid>
            
            <Grid size={{xs: 12, sm: 6}}>
              <FormControl fullWidth>
                <InputLabel id="duration-label">拍卖持续时间</InputLabel>
                <Select
                  labelId="duration-label"
                  value={duration}
                  label="拍卖持续时间"
                  onChange={handleDurationChange}
                >
                  {AUCTION_DURATION_OPTIONS.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>拍卖将在这段时间后自动结束</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      
      <DialogActions sx={{ px: 3, py: 2, borderTop: '1px solid rgba(0, 0, 0, 0.12)' }}>
        <Button
          onClick={onClose}
          disabled={loading}
          sx={{
            color: 'text.primary',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)'
            }
          }}
        >
          取消
        </Button>
        <Button
          variant="contained"
          onClick={handleCreateAuction}
          disabled={loading || !!errors.reservePrice}
          sx={{
            bgcolor: 'primary.main',
            '&:hover': {
              bgcolor: 'primary.dark',
            }
          }}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : '创建拍卖'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AuctionSetupDialog;