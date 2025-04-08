'use client'

import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material'
import Image from 'next/image'

const hotNFTs = [
  {
    id: 1,
    title: '数字艺术 #1',
    price: '0.5 ETH',
    image: '/nfts/nft1.jpg',
    creator: '艺术家A'
  },
  {
    id: 2,
    title: '数字艺术 #2',
    price: '0.8 ETH',
    image: '/nfts/nft2.jpg',
    creator: '艺术家B'
  },
  {
    id: 3,
    title: '数字艺术 #3',
    price: '1.2 ETH',
    image: '/nfts/nft3.jpg',
    creator: '艺术家C'
  }
]

export default function HotNFTsSection() {
  return (
    <Box sx={{ py: 8, px: 2, bgcolor: 'background.paper' }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        热门NFT
      </Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {hotNFTs.map((nft) => (
          <Grid item xs={12} sm={6} md={4} key={nft.id}>
            <Card>
              <CardMedia>
                <Image
                  src={nft.image}
                  alt={nft.title}
                  width={400}
                  height={400}
                  style={{ width: '100%', height: 'auto' }}
                />
              </CardMedia>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {nft.title}
                </Typography>
                <Typography color="text.secondary" gutterBottom>
                  创作者: {nft.creator}
                </Typography>
                <Typography variant="h6" color="primary" gutterBottom>
                  {nft.price}
                </Typography>
                <Button variant="contained" fullWidth>
                  立即购买
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}