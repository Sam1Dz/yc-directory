import React from 'react';

/* MATERIAL UI */
import { Box } from '@mui/material';

/* COMPONENTS */
import {
  HeroDecor,
  HeroHeading,
  HeroSubHeading,
} from '@/components/Hero/fragment';

/* TYPES */
import type { ThemeSx, ComponentsWithChildren } from '@/types';

interface HeroProps {
  heading: {
    text: string | React.ReactNode;
    sx?: ThemeSx;
  };
  subHeading?: {
    text: string | React.ReactNode;
    sx?: ThemeSx;
  };
}

export default function Hero({
  heading,
  subHeading,
  children,
}: ComponentsWithChildren<HeroProps>) {
  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        minHeight: 530,
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        py: 2.5,
        px: 1.5,
      }}
    >
      <HeroDecor />

      <HeroHeading sx={heading.sx}>{heading.text}</HeroHeading>
      {subHeading && (
        <HeroSubHeading sx={subHeading.sx}>{subHeading.text}</HeroSubHeading>
      )}
      {children}
    </Box>
  );
}
