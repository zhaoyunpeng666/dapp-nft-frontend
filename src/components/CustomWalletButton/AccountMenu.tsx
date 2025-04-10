'use client';

import { ContentCopy, Logout } from '@mui/icons-material';
import { Box, Divider, ListItemIcon, Menu, MenuItem, useMediaQuery } from '@mui/material';
import React from 'react';
import { useAccount, useDisconnect } from 'wagmi';
import { useCopy } from '@/utils/useCopy';
import { useTranslation } from 'react-i18next';

const AccountMenu: React.FC<{ children: React.ReactElement }> = ({ children }) => {
    const { disconnect } = useDisconnect();
    const account = useAccount();
    const matches = useMediaQuery('(max-width:750px)');
    const { t } = useTranslation();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [copied, copyHandler] = useCopy();
    // console.log('ZYP-dev 📍 AccountMenu.tsx 📍 copied:', copied);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        !matches && setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDisconnect = () => {
        disconnect();
        localStorage.removeItem('token');
    }

    return (
        <Box>
            <Box onClick={handleClick}>
                {children}
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                sx={{
                    '& .MuiMenu-paper': {
                      background: 'rgb(32, 34, 41)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      mt: '10px',
                    },
                    '& .item': {
                      p: '10px 20px',
                      color: 'rgba(255,255,255,1)',
                      fontSize: '14px',
                      fontWeight: 500,
                      '&:hover': {
                        color: 'white',
                      },
                    },
                    '& .icon': {
                      color: 'rgba(255,255,255,0.64)',
                    },
                  }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={() => copyHandler(account?.address || '')} className="item">
                    <ListItemIcon>
                        <ContentCopy className="icon" fontSize="small" />
                    </ListItemIcon>
                    {/* Copy Address */}
                    {t('copyAddress')}
                </MenuItem>
                <Divider sx={{ width: '80%', margin: '0 auto' }} />
                <MenuItem onClick={() => handleDisconnect()} className="item">
                    <ListItemIcon>
                        <Logout className="icon" fontSize="small" />
                    </ListItemIcon>
                    {/* Logout */}
                    {t('logout')}
                </MenuItem>
            </Menu>
        </Box>
    )
}

export default AccountMenu;