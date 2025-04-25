'use client'

import React, { useRef, useState } from 'react';
import { Box, TextField, Typography, Select, MenuItem, Button, FormControl, SelectChangeEvent, IconButton } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  useAccount,
  useWriteContract,
  usePublicClient,
} from 'wagmi';
import { PublicClient, Address, keccak256, toBytes } from 'viem';
import CustomWalletButton from '@/components/CustomWalletButton';
import LoadingButton from '@mui/lab/LoadingButton';
import Image from 'next/image';
import { Category, Blockchain, CATEGORY_MENU_ARRAY, BLOCKCHAIN_MENU_ARRAY } from './constants';
import { config } from '@/config/chains';
import { NFTAuctionAbi, NFTAuctionAbiAddress } from '@/constants/abis';
import { toast } from "react-toastify";
import services from '@/services';
import { omit } from 'lodash';
import AuctionSetupDialog from './AuctionSetupDialog';

type FormData = {
  name: string;
  description: string;
  categorieId: Category;
  chainId: Blockchain;
  royaltyPercentage: string;
  file: File | null;
  previewUrl: string;
  imageUrl: string;
}

interface NFTFormProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

export default function NFTForm({ formData, setFormData }: NFTFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { isDisconnected, address, 
    // chainId
   } = useAccount();
  // console.log('ZYP-dev 📍 NFTForm.tsx 📍 NFTForm 📍 chainId:', chainId);
  // 生态
  // isDisconnected()

  // console.log('ZYP-dev 📍 NFTForm.tsx 📍 NFTForm 📍 isDisconnected:', isDisconnected);
  const [loading, setLoading] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [mintedTokenId, setMintedTokenId] = useState<Address | null>(null);
  const [showAuctionDialog, setShowAuctionDialog] = useState(true);

  const publicClient = usePublicClient() as PublicClient;

  const {
    writeContractAsync,
 } = useWriteContract({
    config
 });
  
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setNameError(!value.trim());
    }
    if (name === 'royaltyPercentage') {
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
      [name]: Number(value)
    }));
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const res = await services.did.uploadFile(file);
      // console.log('ZYP-dev 📍 NFTForm.tsx 📍 handleFileChange 📍 res:', res);
      setFormData(prev => ({
        ...prev,
        file,
        previewUrl: URL.createObjectURL(file),
        imageUrl: res.path
      }));
    }
  };

  const handleFileDelete = () => {
    if (formData.previewUrl) {
      URL.revokeObjectURL(formData.previewUrl);
    }
    setFormData(prev => ({
      ...prev,
      file: null,
      previewUrl: '',
      imageUrl: ''
    }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // 保存NFT信息
  const handleSaveNFTInfo = async (tokenId: string) => {
    const params = omit(formData, ['previewUrl', 'file'])
    try {
      const res = await services.did.saveNFTInfo({...params, tokenId});
      console.log('ZYP-dev 📍 NFTForm.tsx 📍 handleSaveNFTInfo 📍 res:', res);
    } catch (error) {
      console.log('ZYP-dev 📍 NFTForm.tsx 📍 handleSaveNFTInfo 📍 error:', error);
    }
  }

  const handleSubmit = async () => {
    console.log('铸造NFT:', formData);
    setLoading(true)
    try {
      // 1. 铸造NFT
      const hash = await writeContractAsync({
        abi: NFTAuctionAbi,
        address: NFTAuctionAbiAddress,
        functionName: 'mint',
        args: [address as Address],
      });
      // console.log('ZYP-dev 📍 NFTForm.tsx 📍 handleSubmit 📍 hash:', hash);
      
      if(!hash) {
        toast.error('铸造NFT失败')
        setLoading(false)
        return
      } 
      
      // 2. 等待交易确认      
      const receipt = await publicClient.waitForTransactionReceipt({ hash });
      toast.success('铸造NFT成功')
      console.log('ZYP-dev 📍 NFTForm.tsx 📍 handleSubmit 📍 receipt:', receipt);

      const eventSignature = 'Minted(address,uint256)';
      const eventTopic = keccak256(toBytes(eventSignature));
      // console.log('事件Topic:', eventTopic);
      
      // 3. 从交易收据中获取Minted事件，提取tokenId
      const mintedEvents = receipt.logs
      .filter(log => {
        // Minted事件的topic0，即事件签名哈希
        // const mintedEventSignature = eventTopic; // Minted事件的哈希
        return log.topics[0]?.toLowerCase() === eventTopic.toLowerCase(); // Minted事件的哈希
      });
      console.log('ZYP-dev 📍 NFTForm.tsx 📍 handleSubmit 📍 mintedEvents:', mintedEvents);
      
      // 如果找到Minted事件
      if (mintedEvents.length > 0) {
        // 从事件数据中解析tokenId（通常是topics[1]）
        const tokenIdHex = mintedEvents[0].data;
        handleSaveNFTInfo(tokenIdHex);
        setMintedTokenId(tokenIdHex);
      }
      
      // 4. 显示拍卖设置弹框
      setShowAuctionDialog(true);
      setLoading(false)
      
    } catch (error) {
      console.log('ZYP-dev 📍 NFTForm.tsx 📍 handleSubmit 📍 error:', error);
      toast.error('铸造NFT失败')
      setLoading(false)
    }
  };

  // 关闭拍卖设置弹框
  const handleCloseAuctionDialog = () => {
    setShowAuctionDialog(false);
  };

  return (
    <>
      <Box className="bg-stone-50 p-6 rounded-lg shadow">
        <Typography variant="subtitle1" className="mb-6">NFT详情</Typography>
        
        {/* 文件上传区域 */}
        <Box 
          className="border-2 border-dashed border-gray-300 rounded-lg p-8 mb-6 text-center"
          sx={{
            '&:hover': {
              borderColor: 'primary.main'
            }
          }}
        >
          {!formData.previewUrl ? (
            <>
              <input
                type="file"
                accept="image/*,video/*,audio/*"
                onChange={handleFileChange}
                ref={fileInputRef}
                style={{ display: 'none' }}
              />
              <Button
                variant="outlined"
                component="label"
                startIcon={<CloudUploadIcon />}
                onClick={() => fileInputRef.current?.click()}
                sx={{
                  mb: 2,
                  textTransform: 'none',
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  '&:hover': {
                    borderColor: 'primary.dark',
                    backgroundColor: 'rgba(108, 99, 255, 0.04)'
                  }
                }}
              >
                选择文件
              </Button>
              <Typography variant="body2" color="text.secondary">
                支持 JPG, PNG, GIF, MP4, MP3 格式，文件大小不超过 50MB
              </Typography>
            </>
          ) : (
            <Box sx={{ position: 'relative' }}>
              {formData.file?.type.startsWith('image/') ? (
                <Image
                  src={formData.previewUrl}
                  alt="Preview"
                  width={300}
                  height={300}
                  style={{ maxWidth: '100%', maxHeight: '300px', borderRadius: '8px' }}
                />
              ) : (
                <video
                  src={formData.previewUrl}
                  controls
                  style={{ objectFit: 'cover', maxWidth: '100%', maxHeight: '300px', borderRadius: '8px' }}
                />
              )}
              <IconButton
                onClick={handleFileDelete}
                sx={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)'
                  }
                }}
              >
                <DeleteIcon sx={{ color: 'white' }} />
              </IconButton>
            </Box>
          )}
        </Box>

        {/* 表单字段 */}
        <Typography variant="subtitle1">NFT名称<span className="text-red-500">*</span></Typography>
        <TextField
          fullWidth
          required
          error={nameError}
          helperText={nameError ? "NFT名称不能为空" : ""}
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
            value={formData.categorieId}
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
            {
              CATEGORY_MENU_ARRAY.map((item) => (
                <MenuItem key={item.key} value={item.key}>{item.value}</MenuItem>
              ))
            }
          </Select>
        </FormControl>

        <Typography variant="subtitle1">区块链</Typography>
        <FormControl fullWidth sx={{ marginBottom: '16px' }}>
          <Select
            name="chainId"
            value={`${formData.chainId}`}
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
            {
              BLOCKCHAIN_MENU_ARRAY.map((item) => (
                <MenuItem key={item.key} value={item.key}>{item.value}</MenuItem>
              ))
            }
          </Select>
        </FormControl>

        <Typography variant="subtitle1">版税比例 (%)</Typography>
        <TextField
          fullWidth
          required
          name="royaltyPercentage"
          type="number"
          value={formData.royaltyPercentage}
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
            isDisconnected ? (
              <CustomWalletButton />
            ) : (
              <LoadingButton 
                variant="contained" 
                loading={loading}
                loadingPosition="start"
                fullWidth 
                size="large"
                disabled={!formData.name.trim()}
                sx={{
                  bgcolor: 'primary.main',
                  '&:hover': {
                    bgcolor: 'primary.dark',
                  }
                }}
                onClick={handleSubmit}
              >
                铸造NFT
              </LoadingButton>
            )
          }
        </Box>
      </Box>

      {/* 拍卖设置弹框 */}
      <AuctionSetupDialog 
        open={showAuctionDialog} 
        onClose={handleCloseAuctionDialog} 
        tokenId={mintedTokenId}
      />
    </>
  );
}