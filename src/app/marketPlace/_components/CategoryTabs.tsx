'use client'

import { Box, Tabs, Tab } from "@mui/material";
import { SyntheticEvent } from "react";

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  const categories = [
    { value: 'all', label: '全部' },
    { value: 'art', label: '艺术' },
    { value: 'music', label: '音乐' },
    { value: 'photography', label: '摄影' },
    { value: 'game_assets', label: '游戏资产' },
    { value: 'collectibles', label: '收藏品' }
  ];

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    onCategoryChange(newValue);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
      <Tabs
        value={activeCategory}
        onChange={handleChange}
        textColor="inherit"
        indicatorColor="primary"
        sx={{
          '& .MuiTab-root': {
            color: 'black',
            textTransform: 'none',
            minWidth: 'auto',
            mx: 1,
            '&.Mui-selected': {
              color: '#6c63ff',
              fontWeight: 'bold'
            }
          },
          '& .MuiTabs-indicator': {
            backgroundColor: '#6c63ff'
          }
        }}
      >
        {categories.map((category) => (
          <Tab 
            key={category.value} 
            label={category.label} 
            value={category.value} 
          />
        ))}
      </Tabs>
    </Box>
  );
}