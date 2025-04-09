'use client'

import { Box, Typography, Grid2 as Grid, Card, CardContent } from '@mui/material'

const auctionTypes = [
  {
    id: 1,
    title: '英式拍卖',
    description: '公开竞价，价高者得。拍卖期间价格逐渐上升，最终卖给出价最高的买家。',
    icon: '🔨'
  },
  {
    id: 2,
    title: '荷兰式拍卖',
    description: '价格随时间递减，首个出价者成交。拍卖开始时价格较高，然后逐渐降低。',
    icon: '📉'
  },
  {
    id: 3,
    title: '固定价格销售',
    description: '直接定价购买，无需等待拍卖结束。创作者设定固定价格，买家可立即购买。',
    icon: '💲'
  },
  {
    id: 4,
    title: '盲拍',
    description: '隐藏其他用户出价，仅显示最高价。保护买家隐私，减少价格操纵。',
    icon: '🕶️'
  }
]

export default function AuctionTypesSection() {
  return (
    <Box sx={{ py: 8, px: 2, bgcolor: 'background.paper' }} id="auction-types">
      <Box className="container" sx={{ maxWidth: 1200, mx: 'auto' }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            拍卖类型
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
            我们提供多种拍卖方式，满足不同创作者和收藏家的需求。
          </Typography>
        </Box>
        
        <Grid container spacing={3}>
          {auctionTypes.map((type) => (
            <Grid size={{xs: 12, sm: 6, md: 3}} key={type.id}>
              <Card 
                sx={{ 
                  height: '100%', 
                  textAlign: 'center',
                  p: 2,
                  backgroundColor: '#f9f9f9',
                  borderRadius: '8px',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
                  } 
                }}
              >
                <CardContent>
                  <Box sx={{ fontSize: 36, color: 'primary.main', mb: 2 }}>
                    {type.icon}
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {type.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {type.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
} 