// app/profile/page.tsx
'use client'

import { Container, Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next'

export default function Profile() {
  const { t } = useTranslation()

  return (
    <Container className="min-h-screen">
      <Box className="container mx-auto p-4">
        <Typography className="text-2xl font-bold mb-4">{t('profile')}</Typography>
        <Box className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
          <Typography variant='subtitle1'>{t('userInfo')}</Typography>
        </Box>
      </Box>
    </Container>
  )
}