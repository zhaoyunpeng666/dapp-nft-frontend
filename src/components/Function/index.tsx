'use client'

import { useContext } from 'react'
import { Box, Typography, Button } from '@mui/material';
import { ThemeContext } from '@/providers/ThemeProvider'
import PlatformFeatures from './PlatformFeatures';

const FunctionPage: React.FC = () => {
    const { isDark } = useContext(ThemeContext)

    return (
        <>
            {/* 探索 */}
            <Box 
                className="flex flex-col items-center justify-center gap-4 w-full"
                sx={{
                color: isDark ? '#f8f8f8' : '#1a1a2e',
                background: '#181d35',
                height: '479px',
                }}
            >
                <Typography variant='h4' className="text-2xl font-bold">探索、收集与拍卖数字艺术品</Typography>
                <Box className="flex flex-col items-center">
                    <Typography variant='subtitle1'>
                        在我们的NFT拍卖平台上，您可以发现独特的数字艺术品，参与激动人心的
                    </Typography>
                    <Typography variant='subtitle1'>拍卖，或者铸造并出售您自己的创作。</Typography>
                </Box>
                <Button variant='contained' color='violet'>探索市场</Button>
            </Box>
            {/* 平台特色 */}
            <PlatformFeatures />
        </>
    )
}

export default FunctionPage;