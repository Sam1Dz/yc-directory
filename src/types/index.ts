import React from 'react';

/* TYPES */
import type { SxProps, Theme } from '@mui/material';

export type ThemeSx = SxProps<Theme>;

export type ComponentsWithChildrenRequired<T = object> = T &
  Readonly<{
    children: React.ReactNode;
  }>;
export type ComponentsWithChildren<T = object> = T &
  Readonly<{
    children?: React.ReactNode;
  }>;
