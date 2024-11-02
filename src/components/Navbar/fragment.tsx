'use client';

import React from 'react';

/* MATERIAL UI */
import { useTheme } from '@mui/material/styles';

/* COMPONENTS */
import UIButton from '@/components/ui/button';
import { StyledImage, StyledLink } from '@/components/theme';

/* TYPES */
import type { ComponentsWithChildrenRequired } from '@/types';

export function NavbarLogo() {
  const MuiTheme = useTheme();

  // Component Function
  const logoImg =
    MuiTheme.palette.mode === 'light' ? '/logo-light.png' : '/logo-dark.png';

  return (
    <StyledLink href="/public">
      <StyledImage src={logoImg} alt="logo" width={144} height={30} />
    </StyledLink>
  );
}

interface NavbarButtonProps {
  type?: HTMLButtonElement['type'];
}
export function NavbarButton({
  children,
  type = 'button',
}: ComponentsWithChildrenRequired<NavbarButtonProps>) {
  return (
    <UIButton
      type={type}
      sx={{
        color: (theme) => theme.palette.text.primary,
      }}
    >
      {children}
    </UIButton>
  );
}
