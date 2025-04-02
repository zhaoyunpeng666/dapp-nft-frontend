import { Box } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";


const NavigationApp: React.FC = () => {
    const pathname = usePathname();
    const menu = [
        {
            name: '市场',
            pathname: '/',
            isNew: false,
        },
        {
            name: '热门NFT',
            pathname: '/popularNfts',
            isNew: false,
        },
        {
            name: '拍卖类型',
            pathname: '/auctionType',
            isNew: false,
        },
        {
            name: '创建NFT',
            pathname: '/createNfts',
            isNew: false,
        },
        {
            name: '功能',
            pathname: '/function',
            isNew: false,
        },
    ];

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                gap: '28px',
                '& .menu': {
                    fontSize: '16px',
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.64)',
                    textDecoration: 'none',
                    '&:hover': {
                        cursor: 'pointer',
                        textDecoration: 'none',
                    },
                    '&.h5': {
                        width: '100%',
                        lineHeight: '40px',
                        background: '#171A1F',
                        color: 'white',
                    },
                    '&.sub': {
                        color: 'rgba(255,255,255,0.65)',
                        fontWeight: 400,
                    },
                    '& .active-menu': {
                        color: '#fff',
                    },
                },
                '& .active-menu': {
                    color: '#fff',
                },
            }}
        >
        {menu.map((item) => {
            const isActive = item.pathname == '/' ? item.pathname == pathname : pathname.startsWith(item.pathname);
                return (
                    <Link
                        href={item.pathname}
                        key={item.name}
                        className={isActive ? 'menu active-menu' : 'menu'}
                        style={{ position: 'relative', textDecoration: 'none' }}
                    >
                        {item.name}
                    </Link>
                );
            })}
        </Box>
    )
}

export default NavigationApp;