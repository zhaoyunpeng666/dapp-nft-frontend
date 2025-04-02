'use client';

import { Box } from '@mui/material';

export default function NftDetailLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ p: { xs: '0 10px 0', sm: '10px 0 0' } }}>
      {children}
    </Box>
  );
}
