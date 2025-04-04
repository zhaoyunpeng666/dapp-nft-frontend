'use client'

import React, { useState } from 'react';
import { Box, TextField, Typography, Select, MenuItem, Button, FormControl, SelectChangeEvent } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import { ConnectButton } from '@rainbow-me/rainbowkit';
// import * as GlobalStore from '@/stores/GlobalStore';
import { useAccount } from 'wagmi';
import CustomWalletButton from '@/components/CustomWalletButton';

export default function NFTForm() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: 'art',
    blockchain: 'Ethereum',
    royalty: '10'
  });

  const { isConnected } = useAccount();

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'royalty') {
      const numValue = Number(value);
      if (numValue > 100) return;
    }
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('铸造NFT:', formData);
  };

  return (
    <Box className="bg-stone-50 p-6 rounded-lg shadow">
      <Typography variant="subtitle1" className="mb-6">NFT详情</Typography>
      
      {/* 文件上传区域 */}
      <Box 
        className="border-2 border-dashed border-gray-300 rounded-lg p-8 mb-6 text-center cursor-pointer hover:border-violet-500"
        sx={{
          '&:hover': {
            borderColor: 'primary.main'
          }
        }}
      >
        <CloudUploadIcon className="text-gray-400 text-4xl mb-2" />
        <Typography className="mb-1">点击或拖拽文件到此处上传</Typography>
        <Typography variant="caption" color="text.secondary">
          支持JPG, PNG, GIF, MP4, MP3, 文件限制50MB
        </Typography>
      </Box>

      {/* 表单字段 */}
      <Typography variant="subtitle1">NFT名称*</Typography>
      <TextField
        fullWidth
        required
        // label="NFT名称"
        name="name"
        value={formData.name}
        onChange={handleTextChange}
        placeholder="为您的NFT命名"
        sx={{
          marginBottom: '16px',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(0, 0, 0, 0.23)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
          '& .MuiInputBase-input': {
            color: 'black',
          },
          '& .MuiInputLabel-root': {
            color: 'rgba(0, 0, 0, 0.6)',
          },
          '& .MuiFormLabel-root.Mui-focused': {
            color: 'black',
          }
        }}
      />

      <Typography variant="subtitle1">描述</Typography>
      <TextField
        fullWidth
        required
        multiline
        rows={4}
        // label="描述"
        name="description"
        value={formData.description}
        onChange={handleTextChange}
        placeholder="描述您的NFT，包括其独特特性和背景故事"
        sx={{
          marginBottom: '16px',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(0, 0, 0, 0.23)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
          '& .MuiInputBase-input': {
            color: 'black',
          },
          '& .MuiInputLabel-root': {
            color: 'rgba(0, 0, 0, 0.6)',
          },
          '& .MuiFormLabel-root.Mui-focused': {
            color: 'black',
          }
        }}
      />

      <Typography variant="subtitle1">类别</Typography>
      <FormControl fullWidth sx={{ marginBottom: '16px' }}>
        <Select
          name="category"
          value={formData.category}
        //   label="类别"
          onChange={handleSelectChange}
          displayEmpty
          sx={{
            color: 'black',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(0, 0, 0, 0.23)',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(0, 0, 0, 0.5)',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'black',
            }
          }}
        >
          <MenuItem value="art">艺术</MenuItem>
          <MenuItem value="music">音乐</MenuItem>
          <MenuItem value="video">视频</MenuItem>
          <MenuItem value="photography">摄影</MenuItem>
        </Select>
      </FormControl>

      <Typography variant="subtitle1">区块链</Typography>
      <FormControl fullWidth sx={{ marginBottom: '16px' }}>
        {/* <InputLabel>区块链</InputLabel> */}
        <Select
          name="blockchain"
          value={formData.blockchain}
          onChange={handleSelectChange}
          displayEmpty
          sx={{
            color: 'black',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(0, 0, 0, 0.23)',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(0, 0, 0, 0.5)',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'black',
            }
          }}
        >
          <MenuItem value="Ethereum">以太坊 (Ethereum)</MenuItem>
          <MenuItem value="Polygon">Polygon</MenuItem>
          <MenuItem value="BSC">BSC</MenuItem>
        </Select>
      </FormControl>

      <Typography variant="subtitle1">版税比例 (%)</Typography>
      <TextField
        fullWidth
        required
        // label="版税比例 (%)"
        name="royalty"
        type="number"
        value={formData.royalty}
        onChange={handleTextChange}
        placeholder="输入版税比例"
        inputProps={{
            max: 100,
            min: 0
          }}
        sx={{
          marginBottom: '16px',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(0, 0, 0, 0.23)',
            },
           '&:hover fieldset': {
              borderColor: 'rgba(0, 0, 0, 0.5)',
            },
            '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
              opacity: 1,
              margin: 0,
            }
          },
          '& .MuiInputBase-input': {
            color: 'black',
          },
          '& .MuiInputLabel-root': {
            color: 'rgba(0, 0, 0, 0.6)',
          },
          '& .MuiFormLabel-root.Mui-focused': {
            color: 'black',
          }
        }}
      />
      <Box className='mb-6'>
        {
          isConnected  ? (
            <Button 
            variant="contained" 
            fullWidth 
            size="large"
            sx={{
              bgcolor: 'primary.main',
              '&:hover': {
                bgcolor: 'primary.dark',
              }
            }}
            onClick={handleSubmit}
          >
            铸造NFT
          </Button>
          ) : (
          // <ConnectButton 
          //   showBalance={true}
          //   chainStatus="icon"
          //   accountStatus="address"
          //   label='连接钱包'
          // />
          <CustomWalletButton />
        )
        }
      </Box>
    </Box>
  );
} 