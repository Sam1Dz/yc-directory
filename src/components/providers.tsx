import React from 'react';
import { MantineProvider } from '@mantine/core';

import { theme } from '~/libs/mantine';

export function Providers({ children }: React.PropsWithChildren) {
  return (
    <MantineProvider defaultColorScheme="auto" theme={theme}>
      {children}
    </MantineProvider>
  );
}
