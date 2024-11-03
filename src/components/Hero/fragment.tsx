// Need Change again for this file
'use client';

import React from 'react';

/* MATERIAL UI */
import { alpha, styled } from '@mui/material/styles';
import { Box } from '@mui/material';

/* COMPONENTS */
import { StyledH1, StyledP } from '@/components/theme';

/* TYPES */
import type { ThemeSx, ComponentsWithChildren } from '@/types';

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

const Heading = styled(StyledH1)(({ theme }) => ({
  padding: `${theme.spacing(1.5)} ${theme.spacing(3)}`,
  margin: `${theme.spacing(2.5)} 0`,
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.spacing(1.5),
  textTransform: 'uppercase',
  fontWeight: 800,
  color: theme.palette.text.primary,
  fontSize: 36,
  lineHeight: 1.27,
  maxWidth: 1024,
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

const SubHeading = styled(StyledP)(({ theme }) => ({
  margin: 0,
  fontWeight: 500,
  fontSize: 20,
  color: theme.palette.text.primary,
  maxWidth: 672,
  textAlign: 'center',
  overflowWrap: 'break-word',
}));
export function HeroSubHeading({
  sx,
  children,
}: ComponentsWithChildren<{ sx?: ThemeSx }>) {
  return <SubHeading sx={sx}>{children}</SubHeading>;
}
