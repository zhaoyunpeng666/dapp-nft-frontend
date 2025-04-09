'use client'

import { Box } from '@mui/material'
import Footer from '@/components/Footer'

export default function MarketplaceLayout({ children }: { children: React.ReactNode }) {
  return <Box>
    {children}
    <Footer />
  </Box>
}
