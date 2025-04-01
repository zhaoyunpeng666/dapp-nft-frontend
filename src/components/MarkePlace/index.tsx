// NFT Market Place

import React from "react";
import { Box, FormControl, IconButton, MenuItem, Select, SelectChangeEvent, Typography, Button, Pagination } from "@mui/material";
import { GridView } from "@mui/icons-material";

const MarketPlace: React.FC = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    return (
        <Box>
            <Box className="flex flex-col items-center justify-center py-10 bg-black"
                sx={{
                    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
                }}
            >
                <Typography variant="h4" className="text-center font-bold text-white"
                >NFT市场</Typography>
                <Typography variant="h6" className="text-center font-bold text-white pt-2"
                >探索、收藏和拍卖独特的数字艺术品和收藏品。</Typography>
            </Box>
            {/* 左右布局，左侧为类型筛选条件，占30%，右侧为NFT列表，占70% */}
            <Box className="flex py-4 px-30">
                <Box className="w-1/3 pt-5 px-3 bg-amber-500">
                    <Typography variant="h6" className="text-xl font-semibold">类型筛选</Typography>
                </Box>
                <Box className="w-2/3 p-4 ">
                    <Box className="flex justify-between items-center">
                        <Typography variant="h6" className="text-2xl font-semibold">所有NFT</Typography>
                        <Box className="flex items-center">
                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <Select
                                    value={age}
                                    onChange={handleChange}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="">
                                        <em>最新上架</em>
                                    </MenuItem>
                                    <MenuItem value={10}>价格从低到高</MenuItem>
                                    <MenuItem value={20}>价格从高到低</MenuItem>
                                    <MenuItem value={30}>即将结束</MenuItem>
                                    <MenuItem value={30}>出价最多</MenuItem>
                                </Select>
                            </FormControl>
                            {/* 切换列表和网格视图 */}
                            <IconButton>
                                <GridView />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box>
                        {/* NFT作品列表 */}
                        <Box className="space-y-4"
                            
                        >
                            {[1, 2, 3, 4, 5].map((item) => (
                                <Box key={item} className="flex items-center p-4 bg-white shadow-md rounded-lg"
                                sx={{
                                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
                                    borderRadius: '10px',
                                    padding: '20px',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        transition: 'transform 0.3s'
                                    }
                                }}>
                                    <Box className="w-24 h-24 bg-gray-300 rounded-lg mr-4"></Box>
                                    <Box className="flex-1">
                                        <Typography variant="h6">NFT标题 {item}</Typography>
                                        <Typography variant="body2" color="textSecondary">详情描述 {item}</Typography>
                                    </Box>
                                    <Button variant="contained" color="primary">购买</Button>
                                </Box>
                            ))}
                        </Box>
                        {/* 分页组件 */}
                        <Box className="flex justify-center mt-4">
                            <Pagination count={5} color="primary" />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default MarketPlace;
