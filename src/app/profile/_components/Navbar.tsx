import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import Link from 'next/link';

export default function Navbar() {
  return (
    <AppBar position="sticky" className="bg-[#1a1a2e]">
      <Toolbar className="container mx-auto">
        <Link href="/" className="text-white no-underline">
          <Typography variant="h6" className="font-bold">
            NFT拍卖平台
          </Typography>
        </Link>
        
        <Box className="flex ml-8">
          <Link href="/#features" className="text-white no-underline mx-4">
            <Typography>功能</Typography>
          </Link>
          <Link href="/#trending" className="text-white no-underline mx-4">
            <Typography>热门NFT</Typography>
          </Link>
          <Link href="/#auction-types" className="text-white no-underline mx-4">
            <Typography>拍卖类型</Typography>
          </Link>
          <Link href="/createNfts" className="text-white no-underline mx-4">
            <Typography>创建NFT</Typography>
          </Link>
          <Link href="/marketplace" className="text-white no-underline mx-4">
            <Typography>市场</Typography>
          </Link>
        </Box>

        <Box className="flex items-center ml-auto">
          <Box className="w-10 h-10 rounded-full bg-[#6c63ff] flex items-center justify-center text-white font-bold mr-2">
            U
          </Box>
          <Typography className="text-white font-bold">用户名</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
} 