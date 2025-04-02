// NFT Market Place
'use client'

import React, { useState } from "react";
import { Box, FormControl, IconButton, MenuItem, Select, SelectChangeEvent, Typography, Button, Pagination, Tabs, Tab } from "@mui/material";
import { GridView } from "@mui/icons-material";
import { NFT_LIST_DATA } from './constants'

function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
      sx: {
        color: 'black',
        '&.Mui-selected': {
            color: '#6c63ff',
        },
      },
    };
  }

const MarketPlace: React.FC = () => {
    const [age, setAge] = useState('');
    const [value, setValue] = React.useState(0);

    const handleSelectChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
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
                {/* <Box className="w-1/3 pt-5 px-3 bg-amber-500">
                    <Typography variant="h6" className="text-xl font-semibold">类型筛选</Typography>
                </Box> */}
                <Box className="w-3/3 p-3 ">
                    <Box className="flex justify-between items-center">
                        <Typography variant="h6" className="text-2xl font-semibold">所有NFT</Typography>
                        <Box className="flex items-center">
                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <Select
                                    value={age}
                                    onChange={handleSelectChange}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    sx={{
                                        color: 'black',
                                        borderColor: 'black',
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'black',
                                        },
                                        '& .MuiOutlinedInput-input': {
                                            color: 'black',
                                            paddingTop: '10px',
                                            paddingBottom: '10px',
                                        },
                                        '& .MuiSvgIcon-root': {
                                            color: 'black',
                                        },
                                        '& .MuiListItem-root': {
                                            color: 'black',
                                        },
                                        '&:hover': {
                                            '.MuiOutlinedInput-notchedOutline': {
                                                borderColor: 'black',
                                            },
                                        },
                                        '&:active': {
                                            '.MuiOutlinedInput-notchedOutline': {
                                                borderColor: 'black',
                                            },
                                        },
                                    }}
                                >
                                    <MenuItem value="">
                                    最新上架
                                    </MenuItem>
                                    <MenuItem value={10}>价格从低到高</MenuItem>
                                    <MenuItem value={20}>价格从高到低</MenuItem>
                                    <MenuItem value={30}>即将结束</MenuItem>
                                    <MenuItem value={30}>出价最多</MenuItem>
                                </Select>
                            </FormControl>
                            {/* 切换列表和网格视图 */}
                            <IconButton 
                                sx={{
                                    color: 'black',
                                }}
                            >
                                <GridView />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box>
                        <Box sx={{ borderBottom: 1, borderColor: 'gray' }}>
                            <Tabs
                                value={value}
                                onChange={handleTabChange}
                                textColor="inherit"
                                indicatorColor="primary"
                                aria-label="basic tabs example"
                            >
                                <Tab label="全部" {...a11yProps(0)} />
                                <Tab label="艺术" {...a11yProps(1)} />
                                <Tab label="音乐" {...a11yProps(2)} />
                                <Tab label="摄影" {...a11yProps(3)} />
                                <Tab label="游戏资产" {...a11yProps(4)} />
                                <Tab label="收藏品" {...a11yProps(5)} />
                            </Tabs>
                        </Box>
                        {/* NFT作品列表 */}
                        <Box className="space-y-4 pt-4">
                            {NFT_LIST_DATA.map((item) => (
                                <Box key={item.id} className="flex items-center p-4 bg-white shadow-md rounded-lg"
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
                                        <Typography variant="h6">{item.name}</Typography>
                                        <Typography variant="caption" >{item.createAuthor}</Typography>
                                        <Typography variant="body2" >{item.describe}</Typography>
                                        <Typography variant="caption" >当前出价</Typography>
                                        <Box 
                                            sx={{
                                                color: (theme) => theme.palette.violet.main,
                                                fontWeight: 'bold',
                                            }}
                                        >{item.currentPrice}</Box>
                                        <Typography variant="body2" >{new Date(item.endTime).toLocaleString()}</Typography>
                                    </Box>
                                    <Button variant="contained" color="violet">购买</Button>
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
