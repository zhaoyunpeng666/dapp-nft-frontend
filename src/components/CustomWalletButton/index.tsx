'use client'

// 自定义钱包
import { Box, Button, useMediaQuery } from '@mui/material';
import { ConnectButton } from '@rainbow-me/rainbowkit'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next'
import AccountMenu from './AccountMenu';
import { emojiAvatarForAddress } from './emojiAvatar';

const CustomWalletButton = () => {
    const matches = useMediaQuery('(max-width:750px)');
    const { t } = useTranslation()

    return (
        <ConnectButton.Custom>
        {({
            account,
            chain,
            openAccountModal,
            openChainModal,
            openConnectModal,
            authenticationStatus,
            mounted,
        }) => {
            // Note: If your app doesn't use authentication, you
            // can remove all 'authenticationStatus' checks
            const ready = mounted && authenticationStatus !== 'loading';
            const emojiInfo = account?.address && emojiAvatarForAddress(account?.address);
            const connected =
                ready &&
                account &&
                chain &&
                (!authenticationStatus ||
                    authenticationStatus === 'authenticated');
    
            return (
                <Box
                    {...(!ready && {
                    'aria-hidden': true,
                    'style': {
                        opacity: 0,
                        pointerEvents: 'none',
                        userSelect: 'none',
                    },
                    })}
                >
                    {(() => {
                        // 钱包未连接
                        if (!connected) {
                            return (
                            <Button 
                                sx={{ 
                                    px: '12px',
                                    height: '40px',
                                    minWidth: '100%',
                                    background: '#6c63ff',
                                    borderRadius: '12px',
                                    fontWeight: '700',
                                    color: 'block',
                                    textTransform: 'none',
                                    fontSize: '16px',
                                    '&:hover': {
                                        background: '#6c63ff',
                                        transform: 'scale(1.01)',
                                        transition: '0.3s',
                                    }
                                }}
                                variant="contained"
                                onClick={openConnectModal}
                                type="button">
                                {t('connectWallet')}
                            </Button>
                            );
                        }
            
                        if (chain.unsupported) {
                            return (
                            <Button onClick={openChainModal} type="button">
                                {t('wrongNetwork')}
                            </Button>
                            );
                        }
            
                        return (
                            <Box style={{ display: 'flex', gap: 12 }}>
                            {account.address && (
                                <AccountMenu>
                                <Box
                                    onClick={() => {
                                    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                                    matches && openAccountModal();
                                    }}
                                    sx={{
                                    position: 'relative',
                                    display: 'flex',
                                    gap: '6px',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        transition: '0.3s',
                                    },
                                    }}
                                >
                                    <Box
                                    sx={{
                                        width: '24px',
                                        height: '24px',
                                        borderRadius: '12px',
                                        fontSize: '13px',
                                        textAlign: 'center',
                                        lineHeight: '24px',
                                        background: emojiInfo && emojiInfo.color,
                                    }}
                                    >
                                    {emojiInfo && emojiInfo.emoji}
                                    </Box>
                                    <Box fontSize={'16px'} fontWeight={'bold'}>
                                    {account.displayName}
                                    </Box>
                                    <ExpandMoreIcon sx={{ width: '24px', height: '24px' }} />
                                </Box>
                                </AccountMenu>
                            )}
                            </Box>
                        );
                    })()}
                </Box>
            );
        }}
        </ConnectButton.Custom>
    )
}

export default CustomWalletButton