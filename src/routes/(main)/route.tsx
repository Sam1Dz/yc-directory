import React from 'react';
import { Header } from '~/components/header';
import { createFileRoute, Outlet } from '@tanstack/react-router';

import { Box } from '@mantine/core';

export const Route = createFileRoute('/(main)')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Header />
      <Box component="main">
        <Outlet />
      </Box>
    </>
  );
}
