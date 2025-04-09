import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Collections() {
  const categories = ['全部', '艺术', '音乐', '收藏品'];
  const [activeCategory, setActiveCategory] = useState('全部');

  const nfts = [
    {
      id: 1,
      title: '宇宙探索者 #42',
      price: '2.5 ETH',
      status: '持有中',
      image: 'https://via.placeholder.com/300x250/6c63ff/ffffff?text=Digital+Art',
    },
    {
      id: 2,
      title: '像素猫咪 #103',
      price: '1.8 ETH',
      status: '持有中',
      image: 'https://via.placeholder.com/300x250/16213e/ffffff?text=Collectible',
    },
    {
      id: 3,
      title: '未来城市 #7',
      price: '3.2 ETH',
      status: '持有中',
      image: 'https://via.placeholder.com/300x250/5a52d5/ffffff?text=3D+Model',
    },
    {
      id: 4,
      title: '电子交响曲 #15',
      price: '1.5 ETH',
      status: '持有中',
      image: 'https://via.placeholder.com/300x250/1a1a2e/ffffff?text=Music+NFT',
    },
  ];

  return (
    <>
      <Box className="flex justify-between items-center mb-6">
        <Typography variant="h5" className="font-bold text-[#1a1a2e]">
          我的收藏
        </Typography>
        <Link href="/marketplace">
          <Button variant="outlined" className="border-[#6c63ff] text-[#6c63ff]">
            浏览市场
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
            <Image
              width={300}
              height={200}
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
                    nft.status === '持有中'
                      ? 'bg-green-100 text-green-600'
                      : 'bg-yellow-100 text-yellow-600'
                  }`}
                >
                  {nft.status}
                </Box>
              </Box>
              <Button
                variant="outlined"
                className="w-full mt-4 border-[#6c63ff] text-[#6c63ff]"
              >
                查看详情
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
} 