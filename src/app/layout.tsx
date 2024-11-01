import React from 'react';
import localFont from 'next/font/local';

/* COMPONENTS */
import ThemeProvider from '@/components/theme';

/* TYPES */
import type { Metadata } from 'next';
import type { ComponentsWithChildrenRequired } from '@/types';

import '../styles/global';

const FontWorkSans = localFont({
  src: [
    {
      path: '../fonts/WorkSans-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../fonts/WorkSans-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../fonts/WorkSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/WorkSans-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/WorkSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/WorkSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/WorkSans-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../fonts/WorkSans-Thin.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../fonts/WorkSans-ExtraLight.ttf',
      weight: '100',
      style: 'normal',
    },
  ],
  variable: '--font-work-sans',
});

export const metadata: Metadata = {
  title: 'YC Directory',
  description: 'Pitch, Vote and Grow',
};

export default function RootLayout({
  children,
}: ComponentsWithChildrenRequired) {
  return (
    <html lang="en">
      <body className={FontWorkSans.variable}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}