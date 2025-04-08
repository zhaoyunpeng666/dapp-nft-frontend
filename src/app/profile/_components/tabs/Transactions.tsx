import { Box, Typography } from '@mui/material';
import { useState } from 'react';

export default function Transactions() {
  const categories = ['全部', '购买', '销售', '出价'];
  const [activeCategory, setActiveCategory] = useState('全部');

  const transactions = [
    {
      id: 1,
      type: '购买',
      title: '购买 "未来城市 #7"',
      date: '2025年3月20日 14:30',
      amount: '-3.2 ETH',
      icon: '💰',
    },
    {
      id: 2,
      type: '销售',
      title: '出售 "电子节拍 #3"',
      date: '2025年3月15日 09:45',
      amount: '+0.8 ETH',
      icon: '💸',
    },
    {
      id: 3,
      type: '出价',
      title: '出价 "像素猫咪 #103"',
      date: '2025年3月10日 18:20',
      amount: '1.8 ETH (待定)',
      icon: '🔨',
    },
    {
      id: 4,
      type: '购买',
      title: '购买 "宇宙探索者 #42"',
      date: '2025年3月5日 11:15',
      amount: '-2.5 ETH',
      icon: '💰',
    },
  ];

  return (
    <>
      <Box className="flex justify-between items-center mb-6">
        <Typography variant="h5" className="font-bold text-[#1a1a2e]">
          交易历史
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

      <Box className="space-y-4">
        {transactions.map((transaction) => (
          <Box
            key={transaction.id}
            className="flex justify-between items-center py-4 border-b border-gray-200"
          >
            <Box className="flex items-center">
              <Box
                className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xl mr-4 ${
                  transaction.type === '购买'
                    ? 'text-green-500'
                    : transaction.type === '销售'
                    ? 'text-red-500'
                    : 'text-yellow-500'
                }`}
              >
                {transaction.icon}
              </Box>
              <Box>
                <Typography variant="h6" className="font-bold text-[#1a1a2e]">
                  {transaction.title}
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                  {transaction.date}
                </Typography>
              </Box>
            </Box>
            <Typography
              variant="body1"
              className={`font-bold ${
                transaction.amount.startsWith('+')
                  ? 'text-green-600'
                  : transaction.amount.startsWith('-')
                  ? 'text-red-600'
                  : 'text-gray-600'
              }`}
            >
              {transaction.amount}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
} 