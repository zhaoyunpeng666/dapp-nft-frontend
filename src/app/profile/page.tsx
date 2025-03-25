// app/profile/page.tsx
'use client'

import { useTranslation } from 'react-i18next'

export default function Profile() {
  const { t } = useTranslation()

  return (
    <main className="min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">{t('profile')}</h1>
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
          <p>{t('userInfo')}</p>
        </div>
      </div>
    </main>
  )
}