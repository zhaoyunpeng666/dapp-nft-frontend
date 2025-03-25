// components/Navbar.tsx
'use client'

import { useContext, useState } from 'react'
// import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useTranslation } from 'react-i18next'
import { ThemeContext } from '@/providers/ThemeProvider'
import { Switch, AppBar, Toolbar, Typography, Button, Menu, MenuItem  } from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language'
import CustomWalletButton from '@/components/CustomWalletButton'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  // console.log('ZYP-dev 📍 Navbar.tsx 📍 Navbar 📍 i18n:', i18n);
  const { isDark, toggleTheme } = useContext(ThemeContext)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  // const [connectWallet, setConnectWallet] = useState('Connect Wallet')

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    // setConnectWallet(t('connectWallet')) 
    handleMenuClose()
  }

  return (
    <AppBar position="static" className="dark:bg-gray-800">
      <Toolbar className="flex justify-between">
        <Typography variant="h6">{t('welcome')}</Typography>
        <div className="flex items-center gap-4">
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
          <Switch checked={isDark} onChange={toggleTheme} />
          {/* <ConnectButton 
            showBalance={true}
            chainStatus="icon"
            accountStatus="address"
            label={connectWallet}
          /> */}
          {/* 自定义钱包 */}
          <CustomWalletButton />
        </div>
      </Toolbar>
    </AppBar>
  )
}