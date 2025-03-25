// providers/WalletProvider.tsx
'use client'

import { ReactNode, useEffect, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { RainbowKitProvider, darkTheme, Locale } from '@rainbow-me/rainbowkit'
import { config } from '@/config/chains'
import { useTranslation } from 'react-i18next'
import { getRainbowKitLocale } from '@/lib/rainbowkit-locales'

const queryClient = new QueryClient()

export function WalletProvider({ children }: { children: ReactNode }) {
  const { i18n } = useTranslation()
  const [rainbowkitLocale, setRainbowkitLocale] = useState<Locale>('en')

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

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider locale={rainbowkitLocale} theme={darkTheme()}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}