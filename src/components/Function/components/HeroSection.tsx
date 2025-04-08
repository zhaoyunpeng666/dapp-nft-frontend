'use client'

import { Box, Typography, Button } from '@mui/material'
import { useRouter } from 'next/navigation'

export default function HeroSection() {
  const router = useRouter()

  return (
    <Box 
      className="w-full py-20 text-center"
      sx={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        color: 'white',
        padding: '80px 0',
        textAlign: 'center'
      }}
    >
      <Box className="container mx-auto px-5">
        <Typography 
          variant="h1" 
          className="text-5xl mb-5"
          sx={{ 
            fontSize: '48px',
            marginBottom: '20px'
          }}
        >
          探索、收集与拍卖数字艺术品
        </Typography>
        <Typography 
          variant="body1" 
          className="text-xl mb-8 max-w-2xl mx-auto"
          sx={{ 
            fontSize: '18px',
            maxWidth: '600px',
            margin: '0 auto 30px'
          }}
        >
          在我们的NFT拍卖平台上，您可以发现独特的数字艺术品，参与激动人心的拍卖，或者铸造并出售您自己的创作。
        </Typography>
        <Button
          variant="contained"
          className="bg-[#6c63ff] text-white hover:bg-[#5a52d5]"
          onClick={() => router.push('/marketplace')}
          sx={{
            padding: '8px 16px',
            borderRadius: '4px',
            fontSize: '14px',
            transition: 'all 0.3s',
            textDecoration: 'none',
            display: 'inline-block',
            backgroundColor: '#6c63ff',
            color: 'white',
            border: 'none',
            '&:hover': {
              opacity: 0.9,
              transform: 'translateY(-2px)',
              backgroundColor: '#5a52d5'
            }
          }}
        >
          探索市场
        </Button>
      </Box>
    </Box>
  )
}