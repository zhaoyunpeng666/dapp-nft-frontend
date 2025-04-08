import { Box, Typography, Checkbox, FormControlLabel, FormGroup, TextField, Select, MenuItem, Button, SelectChangeEvent } from "@mui/material";
import React, { useState } from "react";

export default function FilterSidebar() {
  const [categories, setCategories] = useState({
    art: false,
    music: false,
    photography: false,
    game: false,
    collectible: false
  });

  const [auctionTypes, setAuctionTypes] = useState({
    english: false,
    dutch: false,
    fixed: false,
    blind: false
  });

  const [blockchains, setBlockchains] = useState({
    ethereum: false,
    solana: false,
    polygon: false,
    binance: false
  });

  const [priceRange, setPriceRange] = useState({
    min: "",
    max: "",
    currency: "eth"
  });

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategories({
      ...categories,
      [event.target.name]: event.target.checked
    });
  };

  const handleAuctionTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuctionTypes({
      ...auctionTypes,
      [event.target.name]: event.target.checked
    });
  };

  const handleBlockchainChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBlockchains({
      ...blockchains,
      [event.target.name]: event.target.checked
    });
  };

  const handlePriceRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPriceRange({
      ...priceRange,
      [event.target.name]: event.target.value
    });
  };

  const handleCurrencyChange = (event: SelectChangeEvent<string>) => {
    setPriceRange({
      ...priceRange,
      currency: event.target.value as string
    });
  };

  const handleApplyFilter = () => {
    // 在实际应用中，这里会应用筛选
    console.log('应用筛选:', { categories, auctionTypes, blockchains, priceRange });
  };

  const handleClearFilter = () => {
    setCategories({
      art: false,
      music: false,
      photography: false,
      game: false,
      collectible: false
    });
    setAuctionTypes({
      english: false,
      dutch: false,
      fixed: false,
      blind: false
    });
    setBlockchains({
      ethereum: false,
      solana: false,
      polygon: false,
      binance: false
    });
    setPriceRange({
      min: "",
      max: "",
      currency: "eth"
    });
    // 在实际应用中，这里会清除筛选
    alert('所有筛选已清除');
  };

  return (
    <Box 
      className="p-6 rounded-lg"
      sx={{
        backgroundColor: '#f9f9f9',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
        position: 'sticky',
        top: '100px'
      }}
    >
      <Typography variant="h6" className="mb-5 font-semibold" sx={{ color: '#1a1a2e' }}>
        筛选
      </Typography>
      
      <Box className="mb-6">
        <Typography variant="subtitle1" className="font-semibold mb-3" sx={{ color: '#333' }}>
          类别
        </Typography>
        <FormGroup>
          <FormControlLabel 
            control={<Checkbox checked={categories.art} onChange={handleCategoryChange} name="art" />} 
            label="艺术" 
            sx={{ '& .MuiFormControlLabel-label': { color: '#666' } }}
          />
          <FormControlLabel 
            control={<Checkbox checked={categories.music} onChange={handleCategoryChange} name="music" />} 
            label="音乐" 
            sx={{ '& .MuiFormControlLabel-label': { color: '#666' } }}
          />
          <FormControlLabel 
            control={<Checkbox checked={categories.photography} onChange={handleCategoryChange} name="photography" />} 
            label="摄影" 
            sx={{ '& .MuiFormControlLabel-label': { color: '#666' } }}
          />
          <FormControlLabel 
            control={<Checkbox checked={categories.game} onChange={handleCategoryChange} name="game" />} 
            label="游戏资产" 
            sx={{ '& .MuiFormControlLabel-label': { color: '#666' } }}
          />
          <FormControlLabel 
            control={<Checkbox checked={categories.collectible} onChange={handleCategoryChange} name="collectible" />} 
            label="收藏品" 
            sx={{ '& .MuiFormControlLabel-label': { color: '#666' } }}
          />
        </FormGroup>
      </Box>

      <Box className="mb-6">
        <Typography variant="subtitle1" className="font-semibold mb-3" sx={{ color: '#333' }}>
          拍卖类型
        </Typography>
        <FormGroup>
          <FormControlLabel 
            control={<Checkbox checked={auctionTypes.english} onChange={handleAuctionTypeChange} name="english" />} 
            label="英式拍卖" 
            sx={{ '& .MuiFormControlLabel-label': { color: '#666' } }}
          />
          <FormControlLabel 
            control={<Checkbox checked={auctionTypes.dutch} onChange={handleAuctionTypeChange} name="dutch" />} 
            label="荷兰式拍卖" 
            sx={{ '& .MuiFormControlLabel-label': { color: '#666' } }}
          />
          <FormControlLabel 
            control={<Checkbox checked={auctionTypes.fixed} onChange={handleAuctionTypeChange} name="fixed" />} 
            label="固定价格" 
            sx={{ '& .MuiFormControlLabel-label': { color: '#666' } }}
          />
          <FormControlLabel 
            control={<Checkbox checked={auctionTypes.blind} onChange={handleAuctionTypeChange} name="blind" />} 
            label="盲拍" 
            sx={{ '& .MuiFormControlLabel-label': { color: '#666' } }}
          />
        </FormGroup>
      </Box>

      <Box className="mb-6">
        <Typography variant="subtitle1" className="font-semibold mb-3" sx={{ color: '#333' }}>
          区块链
        </Typography>
        <FormGroup>
          <FormControlLabel 
            control={<Checkbox checked={blockchains.ethereum} onChange={handleBlockchainChange} name="ethereum" />} 
            label="以太坊" 
            sx={{ '& .MuiFormControlLabel-label': { color: '#666' } }}
          />
          <FormControlLabel 
            control={<Checkbox checked={blockchains.solana} onChange={handleBlockchainChange} name="solana" />} 
            label="Solana" 
            sx={{ '& .MuiFormControlLabel-label': { color: '#666' } }}
          />
          <FormControlLabel 
            control={<Checkbox checked={blockchains.polygon} onChange={handleBlockchainChange} name="polygon" />} 
            label="Polygon" 
            sx={{ '& .MuiFormControlLabel-label': { color: '#666' } }}
          />
          <FormControlLabel 
            control={<Checkbox checked={blockchains.binance} onChange={handleBlockchainChange} name="binance" />} 
            label="币安智能链" 
            sx={{ '& .MuiFormControlLabel-label': { color: '#666' } }}
          />
        </FormGroup>
      </Box>

      <Box className="mb-6">
        <Typography variant="subtitle1" className="font-semibold mb-3" sx={{ color: '#333' }}>
          价格范围
        </Typography>
        <Box className="flex items-center gap-2 mb-2">
          <TextField
            placeholder="最低"
            name="min"
            value={priceRange.min}
            onChange={handlePriceRangeChange}
            size="small"
            type="number"
            InputProps={{ 
              sx: { 
                borderColor: '#ddd',
                fontSize: '14px'
              } 
            }}
          />
          <Typography variant="body2">至</Typography>
          <TextField
            placeholder="最高"
            name="max"
            value={priceRange.max}
            onChange={handlePriceRangeChange}
            size="small"
            type="number"
            InputProps={{ 
              sx: { 
                borderColor: '#ddd',
                fontSize: '14px'
              } 
            }}
          />
        </Box>
        <Select
          value={priceRange.currency}
          onChange={handleCurrencyChange}
          fullWidth
          size="small"
          sx={{ mt: 1, fontSize: '14px' }}
        >
          <MenuItem value="eth">ETH</MenuItem>
          <MenuItem value="sol">SOL</MenuItem>
          <MenuItem value="matic">MATIC</MenuItem>
          <MenuItem value="bnb">BNB</MenuItem>
        </Select>
      </Box>

      <Button 
        variant="contained" 
        fullWidth
        onClick={handleApplyFilter}
        sx={{ 
          backgroundColor: '#6c63ff', 
          '&:hover': { backgroundColor: '#5a52d5' },
          textTransform: 'none',
          mb: 2
        }}
      >
        应用筛选
      </Button>

      <Box className="text-center">
        <Button 
          variant="text" 
          onClick={handleClearFilter}
          sx={{ 
            color: '#6c63ff', 
            fontSize: '14px',
            textTransform: 'none'
          }}
        >
          清除所有筛选
        </Button>
      </Box>
    </Box>
  );
} 