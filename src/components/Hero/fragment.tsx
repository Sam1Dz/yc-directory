'use client';

import React from 'react';

/* MATERIAL UI */
import { alpha, styled } from '@mui/material/styles';
import { Box } from '@mui/material';

/* TYPES */
import type { ComponentsWithChildren } from '@/types';
import type { ThemeSx } from '@/styles/global';

export function HeroDecor() {
  return (
    <Box
      component="div"
      sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.5),
        top: 0,
        zIndex: -10,
        filter: 'blur(64px)',
      }}
    />
  );
}

const Heading = styled('h1')(({ theme }) => ({
  padding: `${theme.spacing(1.5)} ${theme.spacing(3)}`,
  margin: `${theme.spacing(2.5)} 0`,
  backgroundColor: theme.palette.mode === 'light' ? '#000000' : '#FFFFFF',
  textTransform: 'uppercase',
  fontWeight: 800,
  color: theme.palette.mode === 'light' ? '#FFFFFF' : '#000000',
  fontSize: 36,
  lineHeight: 1.27,
  maxWidth: theme.breakpoints.values.lg,
  textAlign: 'center',
  [theme.breakpoints.up('sm')]: {
    fontSize: 54,
    lineHeight: 1.14,
  },
}));
export function HeroHeading({
  sx,
  children,
}: ComponentsWithChildren<{ sx?: ThemeSx }>) {
  return <Heading sx={sx}>{children}</Heading>;
}

const SubHeading = styled('p')(({ theme }) => ({
  fontWeight: 500,
  fontSize: 20,
  color: theme.palette.mode === 'light' ? '#000000' : '#FFFFFF',
  maxWidth: theme.breakpoints.values.lg,
  textAlign: 'center',
  overflowWrap: 'break-word',
}));
export function HeroSubHeading({
  sx,
  children,
}: ComponentsWithChildren<{ sx?: ThemeSx }>) {
  return <SubHeading sx={sx}>{children}</SubHeading>;
}
