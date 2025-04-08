import { Box, Typography } from "@mui/material";

export default function Header() {
  return (
    <Box 
      className="flex flex-col items-center justify-center py-10"
      sx={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        color: 'white'
      }}
    >
      <Typography variant="h4" className="text-center font-bold">
        NFT市场
      </Typography>
      <Typography variant="h6" className="text-center font-bold pt-2">
        探索、收藏和拍卖独特的数字艺术品和收藏品。
      </Typography>
    </Box>
  );
}