import { Box, Typography, Button } from '@mui/material';

interface ProfileSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function ProfileSidebar({ activeTab, onTabChange }: ProfileSidebarProps) {
  const menuItems = [
    { id: 'collections', label: '我的收藏' },
    { id: 'created', label: '已创建' },
    { id: 'auctions', label: '我的拍卖' },
    { id: 'bids', label: '我的出价' },
    { id: 'transactions', label: '交易历史' },
    { id: 'wallet', label: '钱包管理' },
    { id: 'settings', label: '账户设置' },
  ];

  return (
    <Box className="bg-[#f9f9f9] rounded-lg p-8 shadow-lg">
      <Box className="flex flex-col items-center mb-8">
        <Box className="w-24 h-24 rounded-full bg-[#6c63ff] flex items-center justify-center text-white text-4xl font-bold mb-4">
          U
        </Box>
        <Typography variant="h6" className="font-bold text-[#1a1a2e] mb-1">
          用户名
        </Typography>
        <Typography variant="body2" className="text-gray-600 text-center mb-4 break-all">
          0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t
        </Typography>
        <Button variant="outlined" className="border-[#6c63ff] text-[#6c63ff]">
          编辑资料
        </Button>
      </Box>

      <Box className="flex justify-between mb-8">
        <Box className="text-center">
          <Typography variant="h6" className="text-[#6c63ff] font-bold">12</Typography>
          <Typography variant="body2" className="text-gray-600">已创建</Typography>
        </Box>
        <Box className="text-center">
          <Typography variant="h6" className="text-[#6c63ff] font-bold">8</Typography>
          <Typography variant="body2" className="text-gray-600">已收藏</Typography>
        </Box>
        <Box className="text-center">
          <Typography variant="h6" className="text-[#6c63ff] font-bold">5</Typography>
          <Typography variant="body2" className="text-gray-600">进行中</Typography>
        </Box>
      </Box>

      <Box component="nav">
        {menuItems.map((item) => (
          <Box
            key={item.id}
            className={`p-3 rounded cursor-pointer mb-2 ${
              activeTab === item.id
                ? 'bg-[#6c63ff] text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => onTabChange(item.id)}
          >
            {item.label}
          </Box>
        ))}
      </Box>
    </Box>
  );
} 