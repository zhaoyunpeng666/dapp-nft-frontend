// app/home/index.tsx
'use client'

// import { useContext } from 'react'
// import { useAccount } from 'wagmi'
import { Box } from '@mui/material'
import FunctionPage from '@/components/Function'
// import MarketPlace from '@/marketplace'
// import { ThemeContext } from '@/providers/ThemeProvider'
import Footer from '@/components/Footer'

export default function Home() {
//   const { isConnected } = useAccount()
//   const { isDark } = useContext(ThemeContext)
  
  return (
    <Box className={`min-h-screen `}>
      <FunctionPage />
      {/* <MarketPlace /> */}
      <Footer />
    </Box>
  );
}
