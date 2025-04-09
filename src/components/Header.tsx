// components/Header.tsx
'use client'

import { useContext, useState, useEffect, useCallback } from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useTranslation } from 'react-i18next'
import { ThemeContext } from '@/providers/ThemeProvider'
import { Switch, AppBar, Toolbar, Typography, Button, Menu, MenuItem, useMediaQuery, Box } from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language'
// import CustomWalletButton from '@/components/CustomWalletButton'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import NavigationApp from './NavigationApp'
import { useAccount } from 'wagmi';
import * as GlobalStore from '@/stores/GlobalStore';
import * as Sentry from '@sentry/nextjs';

export default function Header() {
  const { t, i18n } = useTranslation()
  // console.log('ZYP-dev 📍 Header.tsx 📍 Header 📍 i18n:', i18n);
  const { isDark, toggleTheme } = useContext(ThemeContext)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [connectWallet, setConnectWallet] = useState('Connect Wallet')
  const matches = useMediaQuery('(max-width:750px)')
  const { address, connector } = useAccount();

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    !matches && setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    setConnectWallet(t('connectWallet')) 
    handleMenuClose()
  }

  const setSentryTag = useCallback(() => {
    Sentry.setTag('account', address);
    Sentry.setTag('ConnectorName', connector?.name);
  }, [address, connector]);

  useEffect(() => {
    if (address) {
      GlobalStore.initRainbowKitAuthStatus(address);
    }
    if (address && connector) {
      setSentryTag();
    }
  }, [address, connector, setSentryTag]);

  return (
    <AppBar 
        position="sticky"
        className={`dark:bg-gray-700`}
        sx={{ 
          background: isDark ? '#1a1a2e' : '#1a1a2e',
          color: isDark ? '#f8f8f8' : '#f8f8f8',
        }}
      >
      <Toolbar className="container mx-auto">
        <Typography variant="h6">NFT拍卖平台</Typography>
        <NavigationApp />
        <Box className="flex items-center gap-4 ml-auto">
          <Button
            color="inherit"
            startIcon={<LanguageIcon />}
            onClick={handleMenuOpen}
          >
            {t('language')}
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem 
              onClick={() => changeLanguage('en')}
              selected={i18n.language === 'en'}
            >
              {t('english')}
            </MenuItem>
            <MenuItem 
              onClick={() => changeLanguage('zh')}
              selected={i18n.language === 'zh'}
            >
              {t('chinese')}
            </MenuItem>
          </Menu>
          <LightModeIcon className={!isDark ? 'text-yellow-500' : 'text-gray-400'} />
          <Switch checked={isDark} onChange={toggleTheme} />
          <DarkModeIcon className={isDark ? 'text-purple-300' : 'text-gray-500'} />
          <ConnectButton 
            showBalance={true}
            chainStatus="icon"
            accountStatus="address"
            label={connectWallet}
          />
          {/* 自定义钱包 */}
          {/* <CustomWalletButton /> */}
        </Box>
      </Toolbar>
    </AppBar>
  )
}