'use client'

import { Box, Typography, Grid2 as Grid } from '@mui/material'

const features = [
  {
    icon: '🔐',
    title: '安全可靠',
    description: '基于区块链技术，确保交易安全性和数据透明性，智能合约经过第三方审计。'
  },
  {
    icon: '🌐',
    title: '多链支持',
    description: '支持多链NFT资产兼容，包括以太坊、Solana等主流区块链网络。'
  },
  {
    icon: '💰',
    title: '灵活支付',
    description: '支持加密货币和法币支付，自动版税分配系统保障创作者权益。'
  },
  {
    icon: '📊',
    title: '数据分析',
    description: '提供NFT市场趋势图表和用户行为分析，帮助您做出明智的投资决策。'
  }
]

export default function FeaturesSection() {
  return (
    <Box 
      className="w-full py-20 bg-white"
      sx={{ 
        padding: '80px 0',
        backgroundColor: 'white'
      }}
    >
      <Box className="container mx-auto px-5">
        <Box className="text-center mb-12">
          <Typography 
            variant="h2" 
            className="text-4xl mb-4"
            sx={{ 
              fontSize: '36px',
              color: '#1a1a2e',
              marginBottom: '15px'
            }}
          >
            平台特色
          </Typography>
          <Typography 
            variant="body1" 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            sx={{ 
              color: '#666',
              maxWidth: '700px',
              margin: '0 auto'
            }}
          >
            我们的平台提供全方位的NFT创建、拍卖和交易功能，让您的数字资产管理更加便捷。
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid size={{xs: 12, sm: 6, md: 3}} key={index}>
              <Box 
                className="p-8 rounded-lg bg-gray-50 hover:transform hover:-translate-y-2 transition-transform duration-300"
                sx={{ 
                  backgroundColor: '#f9f9f9',
                  borderRadius: '8px',
                  padding: '30px',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-10px)'
                  }
                }}
              >
                <Typography 
                  variant="h3" 
                  className="text-4xl mb-5"
                  sx={{ 
                    fontSize: '40px',
                    color: '#6c63ff',
                    marginBottom: '20px'
                  }}
                >
                  {feature.icon}
                </Typography>
                <Typography 
                  variant="h4" 
                  className="text-xl font-bold mb-3"
                  sx={{ 
                    fontSize: '22px',
                    marginBottom: '15px',
                    color: '#1a1a2e'
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography 
                  variant="body1" 
                  className="text-gray-600"
                  sx={{ color: '#666' }}
                >
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}