import { Box } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";


const NavigationApp: React.FC = () => {
    const pathname = usePathname();
    const menu = [
        {
            name: '功能',
            pathname: '/',
            isNew: false,
        },
        {
            name: '热门NFT',
            pathname: '/#trending',
            isNew: false,
        },
        {
            name: '拍卖类型',
            pathname: '/#auction-types',
            isNew: false,
        },
        {
            name: '创建NFT',
            pathname: '/createNfts',
            isNew: false,
        },
        {
            name: '市场',
            pathname: '/marketplace',
            isNew: false,
        },
    ];

    return (
        <Box
            className="ml-8"
            sx={{
                display: 'flex',
                // alignItems: 'center',
                gap: '28px',
                '& .menu': {
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#fff',
                    textDecoration: 'none',
                    '&:hover': {
                        color: 'rgba(255, 255, 255, 0.8)',
                        cursor: 'pointer',
                    },
                    
                    '& .active-menu': {
                        color: '#fff',
                    },
                },
                '& .active-menu': {
                    color: '#fff',
                    fontWeight: 600,
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
                        style={{ position: 'relative' }}
                    >
                        {item.name}
                    </Link>
                );
            })}
        </Box>
    )
}

export default NavigationApp;