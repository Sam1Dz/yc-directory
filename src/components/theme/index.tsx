'use client';

import React from 'react';
import NextImage from 'next/image';
import NextLink from 'next/link';

/* MATERIAL UI */
import { styled } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from '@mui/material/styles';

/* COMPONENTS */
import Color from '@/components/theme/color-pallete';

/* TYPES */
import type { PaletteMode } from '@mui/material/styles';
import type { ComponentsWithChildren } from '@/types';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xxs: true;
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}

export const StyledImage = styled(NextImage)({});
export const StyledLink = styled(NextLink)({});

export default function ThemeProvider({ children }: ComponentsWithChildren) {
  const [mode] = React.useState<PaletteMode>('dark');

  const appTheme = createTheme({
    breakpoints: {
      values: {
        xxs: 0,
        xs: 475,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        xxl: 1536,
      },
    },
    palette: {
      mode: mode,
      background: {
        default: mode === 'light' ? '#FFFFFF' : '#231719',
      },
      primary: {
        main:
          mode === 'light'
            ? Color.light.primary.DEFAULT
            : Color.dark.primary.DEFAULT,
      },
      secondary: {
        main:
          mode === 'light'
            ? Color.light.secondary.DEFAULT
            : Color.dark.secondary.DEFAULT,
      },
    },
  });

  return (
    <AppRouterCacheProvider>
      <MuiThemeProvider theme={appTheme}>
        <CssBaseline />

        {children}
      </MuiThemeProvider>
    </AppRouterCacheProvider>
  );
}
