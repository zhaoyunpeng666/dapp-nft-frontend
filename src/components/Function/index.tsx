'use client'

import { useContext } from 'react'
import { Box } from '@mui/material';
import { ThemeContext } from '@/providers/ThemeProvider'
// import PlatformFeatures from './PlatformFeatures';
// import Navbar from '@/app/profile/_components/Navbar'
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import HotNFTsSection from './components/HotNFTsSection';
import AuctionTypesSection from './components/AuctionTypesSection';

const FunctionPage: React.FC = () => {
    const { isDark } = useContext(ThemeContext)

    return (
        <>
            {/* <Navbar /> */}
            {/* 探索 */}
            <Box 
                className="flex flex-col items-center justify-center gap-4 w-full"
                sx={{
                color: isDark ? '#f8f8f8' : '#1a1a2e',
                background: '#181d35',
                height: '479px',
                }}
            >
                <HeroSection />
            </Box>
            {/* 平台特色 */}
            {/* <PlatformFeatures /> */}
            <FeaturesSection />
            {/* 热门NFT */}
            <HotNFTsSection />
            {/* 拍卖类型 */}
            <AuctionTypesSection />
        </>
    )
}

export default FunctionPage;