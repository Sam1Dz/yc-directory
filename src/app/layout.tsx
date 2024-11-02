import React from 'react';

/* COMPONENTS */
import ThemeProvider from '@/components/theme';

/* TYPES */
import type { Metadata } from 'next';
import type { ComponentsWithChildrenRequired } from '@/types';

import './globals.css';

export const metadata: Metadata = {
  title: 'YC Directory',
  description: 'Pitch, Vote and Grow',
};

export default function RootLayout({
  children,
}: ComponentsWithChildrenRequired) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
