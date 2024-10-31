import React from 'react';

/* MATERIAL UI */
import { Button, Stack } from '@mui/material';

export default function NavbarMenu() {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="text"
        sx={{
          color: (theme) =>
            theme.palette.mode === 'light' ? '#000000' : '#FFFFFF',
        }}
      >
        Menu
      </Button>
      <Button
        variant="text"
        sx={{
          color: (theme) =>
            theme.palette.mode === 'light' ? '#000000' : '#FFFFFF',
        }}
      >
        Menu
      </Button>
      <Button
        variant="text"
        sx={{
          color: (theme) =>
            theme.palette.mode === 'light' ? '#000000' : '#FFFFFF',
        }}
      >
        Menu
      </Button>
    </Stack>
  );
}
