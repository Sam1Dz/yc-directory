'use client';

/* TYPES */
import type { ThemeSx } from '@/types';

export const flexBetween: ThemeSx = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export const text30Semibold: ThemeSx = {
  fontWeight: 600,
  fontSize: 30,
  color: (theme) => theme.palette.text.primary,
};

export const text26Semibold: ThemeSx = {
  fontWeight: 600,
  fontSize: 26,
  color: (theme) => theme.palette.text.primary,
};

export const text16Medium: ThemeSx = {
  fontWeight: 500,
  fontSize: 16,
  color: (theme) => theme.palette.text.primary,
};

export const noResult: ThemeSx = {
  fontWeight: 400,
  fontSize: 14,
  lineHeight: '20px',
  color: (theme) => theme.palette.text.secondary,
};
