'use client';

import { Box } from '@mui/material';

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      {children}
    </Box>
  );
}
