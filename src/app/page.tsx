// app/page.tsx
'use client'

import { useAccount } from 'wagmi'
import { useTranslation } from 'react-i18next'
import Navbar from '@/components/Navbar'

export default function Home() {

  const { t } = useTranslation()
  const { isConnected } = useAccount()

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto p-4">
        {isConnected ? (
          <div>User Dashboard</div>
        ) : (
          <div className="text-center mt-8">
            <h1 className="text-2xl font-bold">{t('connectWallet')}</h1>
          </div>
        )}
      </div>
    </main>
  );
}
