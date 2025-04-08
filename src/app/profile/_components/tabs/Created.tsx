import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';

export default function Created() {
  const categories = ['全部', '在售', '已售出'];
  const [activeCategory, setActiveCategory] = useState('全部');

  const nfts = [
    {
      id: 1,
      title: '抽象思维 #8',
      price: '1.2 ETH',
      status: '拍卖中',
      image: 'https://via.placeholder.com/300x250/6c63ff/ffffff?text=Created+Art',
    },
    {
      id: 2,
      title: '电子节拍 #3',
      price: '0.8 ETH',
      status: '已售出',
      image: 'https://via.placeholder.com/300x250/16213e/ffffff?text=Created+Music',
    },
    {
      id: 3,
      title: '城市夜景 #12',
      price: '1.5 ETH',
      status: '拍卖中',
      image: 'https://via.placeholder.com/300x250/5a52d5/ffffff?text=Created+Photo',
    },
  ];

  return (
    <>
      <Box className="flex justify-between items-center mb-6">
        <Typography variant="h5" className="font-bold text-[#1a1a2e]">
          已创建的NFT
        </Typography>
        <Link href="/mint">
          <Button variant="contained" className="bg-[#6c63ff] text-white">
            创建新NFT
          </Button>
        </Link>
      </Box>

      <Box className="flex border-b border-gray-200 mb-6">
        {categories.map((category) => (
          <Box
            key={category}
            className={`px-5 py-2 cursor-pointer ${
              activeCategory === category
                ? 'border-b-2 border-[#6c63ff] text-[#6c63ff]'
                : 'text-gray-600'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Box>
        ))}
      </Box>

      <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {nfts.map((nft) => (
          <Box
            key={nft.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:transform hover:-translate-y-1 transition-transform"
          >
            <img
              src={nft.image}
              alt={nft.title}
              className="w-full h-48 object-cover"
            />
            <Box className="p-4">
              <Typography variant="h6" className="font-bold text-[#1a1a2e] truncate">
                {nft.title}
              </Typography>
              <Box className="flex justify-between items-center mt-2">
                <Typography variant="body1" className="font-bold text-[#6c63ff]">
                  {nft.price}
                </Typography>
                <Box
                  className={`px-2 py-1 rounded-full text-xs ${
                    nft.status === '拍卖中'
                      ? 'bg-yellow-100 text-yellow-600'
                      : nft.status === '已售出'
                      ? 'bg-red-100 text-red-600'
                      : 'bg-green-100 text-green-600'
                  }`}
                >
                  {nft.status}
                </Box>
              </Box>
              <Button
                variant="outlined"
                className="w-full mt-4 border-[#6c63ff] text-[#6c63ff]"
              >
                {nft.status === '拍卖中' ? '管理拍卖' : '查看详情'}
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
} 