// providers/WalletProvider.tsx
'use client'

import { ReactNode, useEffect, useState, useContext } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { RainbowKitProvider, darkTheme, lightTheme, Locale, Theme } from '@rainbow-me/rainbowkit'
import { config } from '@/config/chains'
import { useTranslation } from 'react-i18next'
import { getRainbowKitLocale } from '@/lib/rainbowkit-locales'
import { ThemeContext } from '@/providers/ThemeProvider'
import { ToastContainer } from 'react-toastify'


const queryClient = new QueryClient()

export function WalletProvider({ children }: { children: ReactNode }) {
  const { i18n } = useTranslation()
  const [rainbowkitLocale, setRainbowkitLocale] = useState<Locale>('en')
  const { isDark } = useContext(ThemeContext)
  const [rainbowkitTheme, setRainbowkitTheme] = useState<Theme>(lightTheme())

  // 监听语言变化
  useEffect(() => {
    const handleLanguageChanged = (lng: Locale) => {
      setRainbowkitLocale(getRainbowKitLocale(lng))
    }

    i18n.on('languageChanged', handleLanguageChanged)
    return () => {
      i18n.off('languageChanged', handleLanguageChanged)
    }
  }, [i18n])

  // 监听主题变化
  useEffect(() => {
    setRainbowkitTheme(isDark ? darkTheme({
      accentColor: '#6c63ff',
      accentColorForeground: 'white',
      borderRadius: 'medium',
    }) : lightTheme({
      accentColor: '#6c63ff',
      accentColorForeground: 'white',
      borderRadius: 'medium',
    }))
  }, [isDark])

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider 
          locale={rainbowkitLocale} 
          theme={rainbowkitTheme}>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='light'
            // theme={isDark ? 'dark' : 'light'}
          />
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}