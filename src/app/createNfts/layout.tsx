'use client';

import { Box } from '@mui/material';
import Footer from '@/components/Footer';

export default function createNftLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ p: { xs: '0 10px 0', sm: '0 0 0' } }}>
      {children}
      <Footer />
    </Box>
  );
}
