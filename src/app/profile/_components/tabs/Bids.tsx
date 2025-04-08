import { Box, Typography, Button } from '@mui/material';
import { useState } from 'react';

export default function Bids() {
  const categories = ['进行中', '已中标', '未中标'];
  const [activeCategory, setActiveCategory] = useState('进行中');

  const bids = [
    {
      id: 1,
      title: '宇宙探索者 #42',
      myBid: '2.5 ETH',
      status: '领先',
      image: 'https://via.placeholder.com/300x250/6c63ff/ffffff?text=Bid',
    },
    {
      id: 2,
      title: '像素猫咪 #103',
      myBid: '1.8 ETH',
      status: '已超越',
      image: 'https://via.placeholder.com/300x250/16213e/ffffff?text=Bid',
    },
    {
      id: 3,
      title: '未来城市 #7',
      myBid: '3.2 ETH',
      status: '已中标',
      image: 'https://via.placeholder.com/300x250/5a52d5/ffffff?text=Bid',
    },
  ];

  return (
    <>
      <Box className="flex justify-between items-center mb-6">
        <Typography variant="h5" className="font-bold text-[#1a1a2e]">
          我的出价
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

      <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {bids.map((bid) => (
          <Box
            key={bid.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:transform hover:-translate-y-1 transition-transform"
          >
            <img
              src={bid.image}
              alt={bid.title}
              className="w-full h-48 object-cover"
            />
            <Box className="p-4">
              <Typography variant="h6" className="font-bold text-[#1a1a2e] truncate">
                {bid.title}
              </Typography>
              <Box className="flex justify-between items-center mt-2">
                <Typography variant="body1" className="font-bold text-[#6c63ff]">
                  我的出价: {bid.myBid}
                </Typography>
                <Box
                  className={`px-2 py-1 rounded-full text-xs ${
                    bid.status === '领先'
                      ? 'bg-green-100 text-green-600'
                      : bid.status === '已中标'
                      ? 'bg-blue-100 text-blue-600'
                      : 'bg-yellow-100 text-yellow-600'
                  }`}
                >
                  {bid.status}
                </Box>
              </Box>
              <Button
                variant={bid.status === '已超越' ? 'contained' : 'outlined'}
                className={`w-full mt-4 ${
                  bid.status === '已超越'
                    ? 'bg-[#6c63ff] text-white'
                    : 'border-[#6c63ff] text-[#6c63ff]'
                }`}
              >
                {bid.status === '已超越' ? '增加出价' : '查看拍卖'}
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
} 