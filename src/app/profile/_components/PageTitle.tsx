import { Box, Typography } from '@mui/material';

export default function PageTitle() {
  return (
    <Box className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] text-white py-10">
      <Box className="container mx-auto">
        <Typography variant="h3" className="mb-2">
          个人中心
        </Typography>
        <Typography variant="body1" className="max-w-xl">
          管理您的NFT收藏、拍卖历史和账户设置。
        </Typography>
      </Box>
    </Box>
  );
} 