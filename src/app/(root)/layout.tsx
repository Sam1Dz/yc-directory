import React from 'react';

/* MATERIAL UI */
import { Box } from '@mui/material';

/* COMPONENTS */
import Navbar from '@/components/Navbar';

/* TYPES */
import type { ComponentsWithChildrenRequired } from '@/types';

export default function Layout({ children }: ComponentsWithChildrenRequired) {
  return (
    <Box component="main">
      <Navbar />
      {children}
    </Box>
  );
}
