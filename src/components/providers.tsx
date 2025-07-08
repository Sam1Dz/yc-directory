import React from 'react';
import { Box, MantineProvider } from '@mantine/core';

import { theme } from '~/libs/mantine';
import { Header } from '~/components/header';

export function Providers({ children }: React.PropsWithChildren) {
  return (
    <MantineProvider defaultColorScheme="auto" theme={theme}>
      <Header />
      <Box component="main">{children}</Box>
    </MantineProvider>
  );
}
