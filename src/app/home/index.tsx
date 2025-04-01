// app/home/index.tsx
'use client'

// import { useContext } from 'react'
// import { useAccount } from 'wagmi'
import { Box } from '@mui/material'
// import FunctionPage from '@/components/Function'
import MarketPlace from '@/components/MarkePlace'
// import { ThemeContext } from '@/providers/ThemeProvider'

export default function Home() {
//   const { isConnected } = useAccount()
//   const { isDark } = useContext(ThemeContext)
  
  return (
    <Box className={`min-h-screen `}>
      {/* <FunctionPage /> */}
      <MarketPlace />
    </Box>
  );
}
