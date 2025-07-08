import { MantineProvider } from '@mantine/core';
import React from 'react';

export default function Providers({ children }: React.PropsWithChildren) {
  return (
    <MantineProvider defaultColorScheme="auto">{children}</MantineProvider>
  );
}
