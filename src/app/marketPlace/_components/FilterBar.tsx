'use client'

import { Box, Typography, Select, MenuItem, SelectChangeEvent, IconButton } from "@mui/material";
import { ViewModule, ViewList } from "@mui/icons-material";

interface FilterBarProps {
  sortValue: string;
  onSortChange: (event: SelectChangeEvent) => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
}

export default function FilterBar({ sortValue, onSortChange, viewMode, onViewModeChange }: FilterBarProps) {
  return (
    <Box className="flex justify-between items-center mb-5">
      <Typography variant="h6" className="text-xl font-semibold" sx={{ color: '#1a1a2e' }}>
        所有NFT
      </Typography>
      <Box className="flex items-center">
        <Select
          value={sortValue}
          onChange={onSortChange}
          size="small"
          displayEmpty
          className="mr-3"
          sx={{
            minWidth: 150,
            fontSize: '14px',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#ddd'
            }
          }}
        >
          <MenuItem value="">最新上架</MenuItem>
          <MenuItem value="price-low">价格从低到高</MenuItem>
          <MenuItem value="price-high">价格从高到低</MenuItem>
          <MenuItem value="ending-soon">即将结束</MenuItem>
          <MenuItem value="most-bids">出价最多</MenuItem>
        </Select>
        <Box 
          className="border rounded overflow-hidden flex"
          sx={{ borderColor: '#ddd' }}
        >
          <IconButton 
            onClick={() => onViewModeChange('grid')}
            sx={{ 
              borderRadius: 0, 
              backgroundColor: viewMode === 'grid' ? '#6c63ff' : 'transparent',
              color: viewMode === 'grid' ? 'white' : 'black',
              '&:hover': { backgroundColor: viewMode === 'grid' ? '#6c63ff' : '#f5f5f5' }
            }}
          >
            <ViewModule fontSize="small" />
          </IconButton>
          <IconButton 
            onClick={() => onViewModeChange('list')}
            sx={{ 
              borderRadius: 0, 
              backgroundColor: viewMode === 'list' ? '#6c63ff' : 'transparent',
              color: viewMode === 'list' ? 'white' : 'black',
              '&:hover': { backgroundColor: viewMode === 'list' ? '#6c63ff' : '#f5f5f5' }
            }}
          >
            <ViewList fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}