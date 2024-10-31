'use client';

import React from 'react';

/* MATERIAL UI */
import { useTheme } from '@mui/material/styles';
import { Box, Container } from '@mui/material';

/* COMPONENTS */
// UI
import NavbarMenu from '@/components/ui/navbar/menu';
// Theme
import { StyledImage, StyledLink } from '@/components/theme';

export default function Navbar() {
  const MuiTheme = useTheme();

  // Component Function
  const logoImg =
    MuiTheme.palette.mode === 'light' ? '/logo-light.png' : '/logo-dark.png';

  return (
    <Container component="div" maxWidth="xxl">
      <Box
        component="nav"
        sx={{
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <StyledLink href="/public">
          <StyledImage src={logoImg} alt="logo" width={144} height={30} />
        </StyledLink>

        <NavbarMenu />
      </Box>
    </Container>
  );
}
