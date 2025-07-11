import React from 'react';
import { MantineProvider } from '@mantine/core';

import { theme } from '~/libs/mantine';
import { AuthProviderContext } from '~/libs/auth';

export function Providers({ children }: React.PropsWithChildren) {
  return (
    <AuthProviderContext>
      <MantineProvider defaultColorScheme="auto" theme={theme}>
        {children}
      </MantineProvider>
    </AuthProviderContext>
  );
}
