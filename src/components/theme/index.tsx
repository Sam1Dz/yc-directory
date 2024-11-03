'use client';

import React from 'react';
import NextForm from 'next/form';
import NextImage from 'next/image';
import NextLink from 'next/link';
import localFont from 'next/font/local';

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
  interface Palette {
    accent: Palette['primary'];
  }
  interface PaletteOptions {
    accent?: PaletteOptions['primary'];
  }
}

export const StyledLink = styled(NextLink)({ cursor: 'pointer' });
export const StyledImage = styled(NextImage)({});
export const StyledForm = styled(NextForm)({});

export const StyledH1 = styled('h1')({});
export const StyledH3 = styled('h3')({});
export const StyledP = styled('p')({});
export const StyledSpan = styled('p')({});

const FontWorkSans = localFont({
  src: [
    {
      path: '../../app/fonts/WorkSans-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../app/fonts/WorkSans-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../app/fonts/WorkSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../app/fonts/WorkSans-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../app/fonts/WorkSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../app/fonts/WorkSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../app/fonts/WorkSans-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../app/fonts/WorkSans-Thin.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../app/fonts/WorkSans-ExtraLight.ttf',
      weight: '100',
      style: 'normal',
    },
  ],
});

export default function ThemeProvider({ children }: ComponentsWithChildren) {
  const [mode] = React.useState<PaletteMode>('dark');

  let appTheme = createTheme({
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
    typography: {
      fontFamily: FontWorkSans.style.fontFamily,
    },
    palette: {
      mode: mode,
      background: {
        default:
          mode === 'light'
            ? Color.light.background.default
            : Color.dark.background.default,
        paper:
          mode === 'light'
            ? Color.light.background.paper
            : Color.dark.background.paper,
      },
      primary: {
        main: mode === 'light' ? Color.light.primary : Color.dark.primary,
      },
      secondary: {
        main: mode === 'light' ? Color.light.secondary : Color.dark.secondary,
      },
      text: {
        primary:
          mode === 'light' ? Color.light.text.primary : Color.dark.text.primary,
      },
    },
  });
  appTheme = createTheme(appTheme, {
    palette: {
      accent: appTheme.palette.augmentColor({
        color: {
          main: mode === 'light' ? Color.light.accent : Color.dark.accent,
        },
        name: 'accent',
      }),
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
