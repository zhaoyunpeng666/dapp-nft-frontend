import { Box, Typography, Button } from '@mui/material';
import { useState } from 'react';
import Image from 'next/image';


export default function Auctions() {
  const categories = ['进行中', '已结束', '草稿'];
  const [activeCategory, setActiveCategory] = useState('进行中');

  const auctions = [
    {
      id: 1,
      title: '抽象思维 #8',
      currentPrice: '1.2 ETH',
      status: '12小时后结束',
      image: 'https://via.placeholder.com/300x250/6c63ff/ffffff?text=Auction',
    },
    {
      id: 2,
      title: '城市夜景 #12',
      currentPrice: '1.5 ETH',
      status: '2天后结束',
      image: 'https://via.placeholder.com/300x250/5a52d5/ffffff?text=Auction',
    },
    {
      id: 3,
      title: '电子节拍 #3',
      currentPrice: '0.8 ETH',
      status: '已结束',
      image: 'https://via.placeholder.com/300x250/16213e/ffffff?text=Auction',
    },
  ];

  return (
    <>
      <Box className="flex justify-between items-center mb-6">
        <Typography variant="h5" className="font-bold text-[#1a1a2e]">
          我的拍卖
        </Typography>
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

      <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {auctions.map((auction) => (
          <Box
            key={auction.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:transform hover:-translate-y-1 transition-transform"
          >
            <Image
              width={300}
              height={200}
              src={auction.image}
              alt={auction.title}
              className="w-full h-48 object-cover"
            />
            <Box className="p-4">
              <Typography variant="h6" className="font-bold text-[#1a1a2e] truncate">
                {auction.title}
              </Typography>
              <Box className="flex justify-between items-center mt-2">
                <Typography variant="body1" className="font-bold text-[#6c63ff]">
                  当前价: {auction.currentPrice}
                </Typography>
                <Box
                  className={`px-2 py-1 rounded-full text-xs ${
                    auction.status === '已结束'
                      ? 'bg-red-100 text-red-600'
                      : 'bg-yellow-100 text-yellow-600'
                  }`}
                >
                  {auction.status}
                </Box>
              </Box>
              <Button
                variant="outlined"
                className="w-full mt-4 border-[#6c63ff] text-[#6c63ff]"
              >
                {auction.status === '已结束' ? '查看详情' : '查看出价'}
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
} 