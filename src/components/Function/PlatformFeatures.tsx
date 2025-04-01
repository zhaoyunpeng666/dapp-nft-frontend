'use client'

import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Image from 'next/image';
// import { experimentalStyled as styled } from '@mui/material/styles';

const PlatformFeatures: React.FC = () => {
    const cardData = [
        {
            title: '安全可靠',
            description: '基于区块链技术，确保交易安全性和数据透明性，智能合约经过第三方审计。',
            image: 'https://duyi-resource.oss-cn-beijing.aliyuncs.com/1',
        },
        {
            title: '多链支持',
            description: '支持多链NFT资产兼容，包括以太坊、Solana等主流区块链网络。',
            image: 'https://duyi-resource.oss-cn-beijing.aliyuncs.com/2',
        },
        {
            title: '灵活支付',
            description: '支持加密货币和法币支付，自动版税分配系统保障创作者权益。',
            image: 'https://duyi-resource.oss-cn-beijing.aliyuncs.com/3',
        },
        {
            title: '数据分析',
            description: '提供NFT市场趋势图表和用户行为分析，帮助您做出明智的投资决策。',
            image: 'https://duyi-resource.oss-cn-beijing.aliyuncs.com/4',
        },
    ]

    // const Item = styled(Paper)(({ theme }) => ({
    //     backgroundColor: '#fff',
    //     ...theme.typography.body2,
    //     padding: theme.spacing(2),
    //     textAlign: 'center',
    //     color: '#000',
    //     ...theme.applyStyles('dark', {
    //       backgroundColor: '#f9f9f9',
    //     }),
    //   }));
      

    return (
        <>
        <Box 
            className="flex-1 bg-white text-white py-5 px-30 border-fuchsia-500 border-2"
            >
                <Box className="flex flex-col items-center justify-center">
                    <Typography variant='h4' className="text-2xl font-bold text-black">平台特色</Typography>
                    <Typography variant='subtitle1' className='text-black'>
                        我们的平台提供全方位的NFT创建、拍卖和交易功能，让您的数字资产管理更加便捷。
                    </Typography>
                </Box>
                <Box
                    className="grid grid-cols-3 gap-6 pt-4"
                >
                    {
                        cardData.map((item, index) => (
                            <Box key={index} 
                                className="p-4 rounded-lg shadow-md hover:bg-slate-200
                                hover:transform
                                hover:-translate-y-2.5 
                                transition duration-300 ease-in-out cursor-pointer"
                                // sx={{
                                //     '&:hover': {
                                //         transform: 'translateY(-10px)',
                                //     }
                                // }}
                                >
                                <Box className="flex flex-col text-neutral-600">
                                    <Image src={item.image} alt={item.title} width={80} height={80} className="rounded-full" priority />
                                    <Typography gutterBottom variant="h5" component="div" className='text-black'>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2">
                                        {item.description}
                                    </Typography>
                                </Box>
                            </Box>
                        ))
                    }
                </Box>
            </Box>
            
        </>
    )
}
export default PlatformFeatures;